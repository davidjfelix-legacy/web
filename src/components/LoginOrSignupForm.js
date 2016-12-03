import React, { PropTypes } from 'react';


import '../css/LoginOrSignupForm.css';


class LoginOrSignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <a
          className="LoginOrSignupForm__FacebookLoginButton"
          href="https://www.facebook.com/v2.8/dialog/oauth?client_id=1932441930316848&redirect_uri=http://localhost:3000/a/login"
          >Sign in with Facebook</a>
        <div className="LoginOrSignupForm__GoogleLoginButton">Sign in with Google</div>
        <div className="LoginOrSignupForm__TwitterLoginButton">Sign in with twitter</div>
        <div className="LoginOrSignupForm__DividerText">- or -</div>
        <input className="LoginOrSignupForm__InputField" type="text" name="username"/>
        <input className="LoginOrSignupForm__InputField" type="password" name="password"/>
        <div className="LoginOrSignupForm__SubmitButton">Log in </div>
        <div className="LoginOrSignupForm__DividerText">- make a free account today -</div>
        <div className="LoginOrSignupForm__RegisterButton">Register</div>
      </form>
    );
  }
};

LoginOrSignupForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default LoginOrSignupForm;
