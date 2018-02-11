import {DefaultButton, TextField} from 'office-ui-fabric-react'
import queryString from 'query-string'
import React from 'react'
import {Link} from 'react-router-dom'
import {compose, withHandlers, withProps, withState} from 'recompose'
import styled from 'styled-components'


const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
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


const enhance = compose(
  withProps((props) => {
    const qs = queryString.parse(props.location.search)
    return {
      redirectUrl: qs['redirect'] ? qs['redirect'] : '/'
    }
  }),
  withState('email', 'updateEmail', ''),
  withState('password', 'updatePassword', ''),
  withHandlers(
    {
      onEmailChange: ({updateEmail}) => newValue => (updateEmail(newValue)),
      onPasswordChange: ({updatePassword}) => newValue => (updatePassword(newValue)),
      onEmailSubmit: ({email, password, redirectUrl}) => () => null,
      onFacebookSubmit: ({dispatch, redirectUrl}) => () => null,
      onGoogleSubmit: ({dispatch, redirectUrl}) => () => null,
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
