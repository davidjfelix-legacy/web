import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { firebaseConnect, pathToJS } from 'react-redux-firebase'

import LoginOrSignupForm from './LoginOrSignupForm'

const mapStateToProps = ({firebase}) => ({
  authError: pathToJS(firebase, 'authError'),
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile')
})

const LoginView = () => (
  <Container>
    <LoginOrSignupForm />
  </Container>
)

export default firebaseConnect()(connect(mapStateToProps)(LoginView))
