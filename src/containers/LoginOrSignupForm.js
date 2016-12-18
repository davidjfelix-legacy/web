import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/authentication';

import styles from '../css/LoginOrSignupForm.css';


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
        <button
          className={styles.LoginOrSignupForm__FacebookLoginButton}
          href="https://www.facebook.com/v2.8/dialog/oauth?client_id=1932441930316848&redirect_uri=http://localhost:3000/a/login"
          >Log in with Facebook</button>
        <button
          className={styles.LoginOrSignupForm__GoogleLoginButton}
          >Log in with Google</button>
        <div className={styles.LoginOrSignupForm__DividerText}>- or -</div>
        <input
          className={styles.LoginOrSignupForm__InputField}
          type="text"
          ref="username"
          name="username"
          placeholder="Email or Username"
        />
        <input
          className={styles.LoginOrSignupForm__InputField}
          type="password"
          ref="password"
          name="password"
          placeholder="Password"
        />
        <input className={styles.LoginOrSignupForm__SubmitButton} type="submit" name="Log in" />
        <div className={styles.LoginOrSignupForm__DividerText}>Don't have an accont? Sign Up</div>
      </form>
    );
  }
};

LoginOrSignupForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}


LoginOrSignupForm = connect()(LoginOrSignupForm)

export default LoginOrSignupForm;
