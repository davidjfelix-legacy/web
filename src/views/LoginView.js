import React from 'react';
import { connect } from 'react-redux';

import LoginOrSignupForm from '../components/LoginOrSignupForm';


const LoginView = () => (
  <div className='LoginView'>
    <LoginOrSignupForm />
  </div>
);

export default connect()(LoginView);
