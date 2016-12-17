import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/authentication';

import '../css/LoginOrSignupForm.css';


class LoginOrSignupForm extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        let creds = {
          username: this.refs.username.value.trim(),
          password: this.refs.password.value.trim()
        };
        this.props.dispatch(loginUser(creds));
      }}>
        <a
          className="LoginOrSignupForm__FacebookLoginButton"
          href="https://www.facebook.com/v2.8/dialog/oauth?client_id=1932441930316848&redirect_uri=http://localhost:3000/a/login"
          >Sign in with Facebook</a>
        <div className="LoginOrSignupForm__GoogleLoginButton">Sign in with Google</div>
        <div className="LoginOrSignupForm__TwitterLoginButton">Sign in with twitter</div>
        <div className="LoginOrSignupForm__DividerText">- or -</div>
        <input className="LoginOrSignupForm__InputField" type="text" ref="username" name="username"/>
        <input className="LoginOrSignupForm__InputField" type="password" ref="password" name="password"/>
        <div className="LoginOrSignupForm__SubmitButton">Log in </div>
        <div className="LoginOrSignupForm__DividerText">- make a free account today -</div>
        <div className="LoginOrSignupForm__RegisterButton">Register</div>
        <input type="submit" />
      </form>
    );
  }
};

LoginOrSignupForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}


LoginOrSignupForm = connect()(LoginOrSignupForm)

export default LoginOrSignupForm;
