import queryString from 'query-string'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {replace} from 'react-router-redux'
import {compose, withHandlers, withProps, withState} from 'recompose'

import {createOrUpdateUserProfile} from '../actions/users'
import auth, {facebookProvider, googleProvider} from '../auth'
import {ensureNotAuthenticated} from './hocs'


const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
  withProps((props) => {
    const qs = queryString.parse(props.location.search)
    return {
      redirectUrl: qs['redirect'] ? qs['redirect'] : '/'
    }
  }),
  ensureNotAuthenticated(auth),
  withState('email', 'updateEmail', ''),
  withState('password', 'updatePassword', ''),
  withHandlers(
    {
      onEmailChange: props => event => {
        props.updateEmail(event.target.value)
      },
      onPasswordChange: props => event => {
        props.updatePassword(event.target.value)
      },
      onEmailSubmit: props => event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(props.email, props.password)
          .then(
            props.dispatch(replace(props.redirectUrl))
          )
      },
      onFacebookSubmit: props => event => {
        event.preventDefault()
        auth.signInWithPopup(facebookProvider)
          .then(
            (userCredential) => {
              props.dispatch(createOrUpdateUserProfile(
                {
                  user: userCredential.user,
                  profile: {
                    display_name: userCredential.user.displayName
                  },
                }))
              props.dispatch(replace(props.redirectUrl))
            }
          )
          .catch(
            (error) => {
              // Display Error
            }
          )
      },
      onGoogleSubmit: props => event => {
        event.preventDefault()
        auth.signInWithPopup(googleProvider)
          .then(
            (userCredential) => {
              auth.signInWithCredential()
              props.dispatch(createOrUpdateUserProfile(
                {
                  user: userCredential.user,
                  profile: {
                    display_name: userCredential.user.displayName
                  },
                }))
              props.dispatch(replace(props.redirectUrl))
            }
          )
          .catch(
            (error) => {
              // Display Error
            }
          )
      },
    })
)

const LoginView = ({email, password, onEmailChange, onPasswordChange, onEmailSubmit, onFacebookSubmit, onGoogleSubmit}) => (
  <div>
    <form id='emailPassword' onSubmit={onEmailSubmit}/>
    <input
      form='emailPassword'
      id='email'
      name='email'
      type='email'
      placeholder='Email'
      value={email}
      onChange={onEmailChange}
    />
    <input
      form='emailPassword'
      id='password'
      name='password'
      type='password'
      placeholder='Password'
      value={password}
      onChange={onPasswordChange}
    />
    <input
      form='emailPassword'
      type='submit'
      value='Sign In'
    />
    <form id='facebook' onSubmit={onFacebookSubmit}/>
    <input
      form='facebook'
      type='submit'
      value='Sign in with Facebook'
    />
    <form id='google' onSubmit={onGoogleSubmit}/>
    <input
      form='google'
      type='submit'
      value='Sign in with Google'
    />
    <Link to='/auth/register'>Register</Link>
  </div>
)

export default enhance(LoginView)
