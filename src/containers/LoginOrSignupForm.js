import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/authentication';

import styles from '../css/LoginOrSignupForm.css';


class LoginOrSignupForm extends React.Component {
  render() {
    return (
      <div>
      <form action="https://www.facebook.com/v2.8/dialog/oauth">
        <input type="hidden" name="client_id" value="1932441930316848" />
        <input type="hidden" name="redirect_uri" value="http://localhost:3000/a/facebook" />
        <button
          className={styles.FacebookLoginButton}
          type="submit"
          >Log in with Facebook</button>
      </form>
      <form onSubmit={(event) => {
        event.preventDefault();
        let creds = {
          username: this.refs.username.value.trim(),
          password: this.refs.password.value.trim()
        };
        this.props.dispatch(loginUser(creds));
      }}>
        <button
          className={styles.GoogleLoginButton}
          >Log in with Google</button>
        <div className={styles.DividerText}>- or -</div>
        <input
          className={styles.InputField}
          type="text"
          ref="username"
          name="username"
          placeholder="Email or Username"
        />
        <input
          className={styles.InputField}
          type="password"
          ref="password"
          name="password"
          placeholder="Password"
        />
        <input className={styles.SubmitButton} type="submit" name="Log in" />
        <div className={styles.DividerText}>Don't have an accont? Sign Up</div>
      </form>
      </div>
    );
  }
};

LoginOrSignupForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}


LoginOrSignupForm = connect()(LoginOrSignupForm)

export default LoginOrSignupForm;
