import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import LoginOrSignupForm from './LoginOrSignupForm';


const LoginView = () => (
  <Container>
    <LoginOrSignupForm />
  </Container>
);

export default connect()(LoginView);
