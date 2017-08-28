import React from 'react'
import {connect} from 'react-redux'
import {compose, withState, withHandlers} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

import auth from '../auth'

import {style} from '../styles/CentralForm'
import {ensureNotAuthenticated} from './hocs'

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
  injectSheet(style),
  ensureNotAuthenticated(auth),
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
      auth.createUserWithEmailAndPassword(props.email, props.password)
        .then(
          (user) => {
            // TODO: add loading
            props.dispatch({
              user,
              profile: {
                username: props.username,
                has_username: true
              }
            })
          }
        )
        .catch(
          (error) => {
            // TODO: add fail message
            console.log(error)
          }
        )
    }
  })
)

const RegisterView = ({classes, email, password, username, onEmailChange, onPasswordChange, onUsernameChange, onRegisterSubmit}) => (
  <div className={classes.view}>
    <form id='register' className={classes.form} onSubmit={onRegisterSubmit}/>
    <input
      form='register'
      className={classNames(classes.input, classes.inputText)}
      id='email'
      type='email'
      placeholder='Email'
      value={email}
      onChange={onEmailChange}/>
    <input
      form='register'
      className={classNames(classes.input, classes.inputText)}
      id='password'
      type='password'
      placeholder='Password'
      value={password}
      onChange={onPasswordChange}/>
    <input
      form='register'
      id='username'
      className={classNames(classes.input, classes.inputText)}
      type='text'
      placeholder='Username'
      value={username}
      onChange={onUsernameChange}/>
    <input
      form='register'
      className={classes.input}
      type='submit'
      value='Register'/>
    Already a user? <Link to='/auth/login'>Sign in</Link>
  </div>
)

export default enhance(RegisterView);
