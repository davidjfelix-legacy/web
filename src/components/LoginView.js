import queryString from 'query-string'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {replace} from 'react-router-redux'
import {compose, withHandlers, withProps, withState} from 'recompose'
import styled from 'styled-components'

import {createOrUpdateUserProfile} from '../actions/users'
import auth, {facebookProvider, googleProvider} from '../auth'
import {ensureNotAuthenticated} from './hocs'
import {DefaultButton, TextField} from 'office-ui-fabric-react'


const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  justify-content: center;
  padding-top: 10em;
`

const FormButton = styled(DefaultButton)`
  display: flex;
  justify-content: center;
  margin: 0.5em;
  width: 25em;
`

const FormTextField = styled(TextField)`
  display: block;
  margin: 0.5em;
  width: 25em;
`

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
      onEmailChange: ({updateEmail}) => newValue => (updateEmail(newValue)),
      onPasswordChange: ({updatePassword}) => newValue => (updatePassword(newValue)),
      onEmailSubmit: ({dispatch, email, password, redirectUrl}) => () => (
        auth.signInWithEmailAndPassword(email, password)
          .then(
            dispatch(replace(redirectUrl))
          )
      ),
      onFacebookSubmit: ({dispatch, redirectUrl}) => () => (
        auth.signInWithPopup(facebookProvider)
          .then(
            (userCredential) => {
              dispatch(createOrUpdateUserProfile(
                {
                  user: userCredential.user,
                  profile: {
                    display_name: userCredential.user.displayName
                  },
                }))
              dispatch(replace(redirectUrl))
            }
          )
          .catch(
            (error) => {
              // Display Error
            }
          )
      ),
      onGoogleSubmit: ({dispatch, redirectUrl}) => () => (
        auth.signInWithPopup(googleProvider)
          .then(
            (userCredential) => {
              auth.signInWithCredential()
              dispatch(createOrUpdateUserProfile(
                {
                  user: userCredential.user,
                  profile: {
                    display_name: userCredential.user.displayName
                  },
                }))
              dispatch(replace(redirectUrl))
            }
          )
          .catch(
            (error) => {
              // Display Error
            }
          )
      ),
    })
)

const LoginView = ({email, password, onEmailChange, onPasswordChange, onEmailSubmit, onFacebookSubmit, onGoogleSubmit}) => (
  <Container>
    <FormTextField
      label='Email'
      type='email'
      placeholder='Email'
      value={email}
      onChanged={onEmailChange}
    />
    <FormTextField
      label='Password'
      name='password'
      type='password'
      placeholder='Password'
      value={password}
      onChanged={onPasswordChange}
    />
    <FormButton
      text='Sign In'
      primary={true}
      onClick={onEmailSubmit}
    />
    <FormButton
      text='Sign in with Facebook'
      primary={true}
      onClick={onFacebookSubmit}
    />
    <FormButton
      text='Sign in with Google'
      primary={true}
      onClick={onGoogleSubmit}
    />
    <Link to='/auth/register'>Register</Link>
  </Container>
)

export default enhance(LoginView)
