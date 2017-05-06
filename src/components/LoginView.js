import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'

import auth, { facebookProvider, googleProvider } from '../auth'

const enhance = compose(
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
      auth.signInWithPopup(facebookProvider).then((result) => {
        console.log("success fb")
      }
      ).catch((error) => {
        console.log("error fb")
      })
    },
    onGoogleSubmit: props => event => {
      event.preventDefault()
      auth.signInWithPopup(googleProvider).then((result) => {
        console.log("success fb")
      }
      ).catch((error) => {
        console.log("error fb")
      })
    },
  })
)

const LoginView = ({email, password, onEmailChange, onPasswordChange, onEmailSubmit, onFacebookSubmit, onGoogleSubmit}) => (
  <div>
    <form onSubmit={onEmailSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}/>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}/>
      <input type="submit" value="Sign In"/>
    </form>
    <form onSubmit={onFacebookSubmit}>
      <input type="submit" value="Sign in with Facebook" />
    </form>
    <form onSubmit={onGoogleSubmit}>
      <input type="submit" value="Sign in with Google" />
    </form>
    <a>Register</a>
  </div>
)

export default connect()(enhance(LoginView))
