import React from 'react';
import Section from 'grommet/components/Section';
import { connect } from 'react-redux';

import LoginOrSignupForm from '../containers/LoginOrSignupForm';


const LoginView = () => (
  <Section full={true} justify="center" textAlign="center">
    <LoginOrSignupForm />
  </Section>
);

export default connect()(LoginView);
