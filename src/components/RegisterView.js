import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'

const styles= {
  registerView: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
}

const enhance = compose(
  connect(),
  withState('email', 'updateEmail', ''),
  withState('password', 'updatePassword', ''),
  withState('username', 'updateUsername', ''),
  withHandlers({
    onEmailChange: props => event => {
      props.updateEmail(event.target.value)
    },
    onPasswordChange: props => event => {
      props.updatePassword(event.target.value)
    },
    onUsernameChange: props => event => {
      props.updateUsername(event.target.value)
    },
    onRegisterSubmit: props => event => {
      event.preventDefault()
      // Create user here?
    }
  })
)

const RegisterView = ({email, password, username, onEmailChange, onPasswordChange, onUsernameChange, onRegisterSubmit}) =>(
  <div style={styles.registerView}>
    <form id='register' onSubmit={onRegisterSubmit}/>
    <input
      form='register'
      id='email'
      type='email'
      placeholder='Email'
      value={email}
      onChange={onEmailChange} />
    <input
      form='register'
      id='password'
      type='password'
      placeholder='Password'
      value={password}
      onChange={onPasswordChange} />
    <input
      form='register'
      id='username'
      type='text'
      placeholder='Username'
      value={username}
      onChange={onUsernameChange} />
    <input form='register' type='submit' value='Register'/>
  </div>
)

export default enhance(RegisterView);
