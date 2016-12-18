import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LoginOrSignupForm from '../components/LoginOrSignupForm';

storiesOf('LoginOrSignupForm', module)
  .add('Basic Form', () => (
    <LoginOrSignupForm />
  ));
