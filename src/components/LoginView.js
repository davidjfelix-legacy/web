import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { replace } from 'react-router-redux'
import { Link } from 'react-router'

import { createOrUpdateUserProfile } from '../actions/users'
import auth, { facebookProvider, googleProvider } from '../auth'

const jssStyle = {
  input: {
    height: '2.5em',
  },
  inputText: {
    paddingLeft: '1em',
    marginBottom: '2px',
  },
  form: {
    margin: '.5em',
  },
  view: {
    display: 'flex',
    height: '30em',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '30em'
  },
}

const enhance = compose(
  connect(),
  injectSheet(jssStyle),
  withState('email', 'updateEmail', ''),
  withState('password', 'updatePassword', ''),
  withHandlers({
    onEmailChange: props => event => {
      props.updateEmail(event.target.value)
    },
    onPasswordChange: props => event => {
      props.updatePassword(event.target.value)
    },
    onEmailSubmit: props => event => {
      event.preventDefault()
      auth.signInWithEmailAndPassword(props.email, props.password)
    },
    onFacebookSubmit: props => event => {
      event.preventDefault()
      auth.signInWithPopup(facebookProvider)
        .then(
          (userCredential) => {
            props.dispatch(createOrUpdateUserProfile({
              user: userCredential.user,
              profile: {
                display_name: userCredential.user.displayName
              },
            }))
            props.dispatch(replace('/'))
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
            props.dispatch(createOrUpdateUserProfile({
              user: userCredential.user,
              profile: {
                display_name: userCredential.user.displayName
              },
            }))
            props.dispatch(replace('/'))
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

const LoginView = ({email, password, onEmailChange, classes, onPasswordChange, onEmailSubmit, onFacebookSubmit, onGoogleSubmit}) => (
  <div className={classes.view}>
    <form id='emailPassword' className={classes.form} onSubmit={onEmailSubmit}/>
    <input
      form='emailPassword'
      className={classNames(classes.input, classes.inputText)}
      id='email'
      name='email'
      type='email'
      placeholder='Email'
      value={email}
      onChange={onEmailChange}/>
    <input
      form='emailPassword'
      className={classNames(classes.input, classes.inputText)}
      id='password'
      name='password'
      type='password'
      placeholder='Password'
      value={password}
      onChange={onPasswordChange}/>
    <input
      form='emailPassword'
      className={classes.input}
      type='submit'
      value='Sign In'/>
    <form id='facebook' className={classes.form} onSubmit={onFacebookSubmit}/>
    <input
      form='facebook'
      className={classes.input}
      type='submit'
      value='Sign in with Facebook'/>
    <form id='google' className={classes.form} onSubmit={onGoogleSubmit}/>
    <input
      form='google'
      className={classes.input}
      type='submit'
      value='Sign in with Google'/>
    <Link to='/a/register'>Register</Link>
  </div>
)

export default enhance(LoginView)
