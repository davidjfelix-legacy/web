import React from 'react';


import '../css/LoginOrSignupForm.css';

const LoginOrSignupForm = () => (
  <form onChange={()=>{}}>
    <div className="LoginOrSignupForm__FacebookLoginButton">Sign In With Facebook</div>
    <div className="LoginOrSignupForm__GoogleLoginButton">Sign In With Google</div>
    <div className="LoginOrSignupForm__TwitterLoginButton">Sign In With twitter</div>
    <div>- or -</div>
    <input className="LoginOrSignupForm__InputField" type="text" name="username"/>
    <input className="LoginOrSignupForm__InputField" type="password" name="password"/>
    <div className="LoginOrSignupForm__SubmitButton">Log in </div>
    <div>- make a free account today -</div>
    <div className="LoginOrSignupForm__RegisterButton">Register</div>
  </form>
);

export default LoginOrSignupForm;
