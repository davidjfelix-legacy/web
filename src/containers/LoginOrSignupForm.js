import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/authentication';

import styles from '../css/LoginOrSignupForm.css';
import { FACEBOOK_CLIENT_ID, MG4_WEB_BASE_URL } from '../config';


class LoginOrSignupForm extends React.Component {
  render() {
    return (
      <div>
        <LoginWithFacebookButton clientId={FACEBOOK_CLIENT_ID} redirectURI={MG4_WEB_BASE_URL + "/a/facebook"} scopes={['email']}/>
        <form>
          <button
            className={styles.GoogleLoginButton}
            >Log in with Google</button>
        </form>
        <div className={styles.DividerText}>- or -</div>
        <form onSubmit={(event) => {
          event.preventDefault();
          let creds = {
            username: this.refs.username.value.trim(),
            password: this.refs.password.value.trim()
          };
          this.props.dispatch(loginUser(creds));
        }}>
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
