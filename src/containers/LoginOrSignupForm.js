import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { loginUser } from '../actions/authentication';

import { FACEBOOK_CLIENT_ID, MG4_WEB_BASE_URL } from '../configuration';


class LoginOrSignupForm extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
};

LoginOrSignupForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}


LoginOrSignupForm = connect()(LoginOrSignupForm)

export default LoginOrSignupForm;


      /*<Box flex={true} justify="center" alignContent="center" align="center">
        <Form pad={{horizontal: "medium", vertical: "small"}} action="https://www.facebook.com/v2.8/dialog/oauth">
          <input type="hidden" name="client_id" value={FACEBOOK_CLIENT_ID} />
          <input type="hidden" name="redirect_uri" value={MG4_WEB_BASE_URL + "/a/facebook"} />
          <input type="hidden" name="scope" value="email" />
          <Footer align="stretch">
            <Button path="/" type="button" icon={<SocialFacebookIcon />} primary={true} fill={true} label="Log in with Facebook" />
          </Footer>
        </Form>
        <Form pad={{horizontal: "medium", vertical: "none"}}>
          <Footer align="stretch">
            <Button path="/" icon={<PlatformGoogleIcon />} type="button" primary={true} fill={true} label="Log in with Google"/>
          </Footer>
        </Form>
        <Box align="stretch" pad="medium">
          <Label margin="none">- or -</Label>
        </Box>
        <Form pad={{horizontal: "medium", vertical: "none"}}>
          <FormField htmlFor="usernameOrEmail" label="Username or Email">
            <input type="email" name="usernameOrEmail" />
          </FormField>
          <FormField htmlFor="password" label="Password">
            <input type="password" name="password"/>
          </FormField>
          <Footer align="stretch" pad={{horizontal: "none", vertical: "small"}}>
            <Button primary={true} fill={true} type="submit" label="Log In"/>
          </Footer>
        </Form>
        <Box align="stretch" pad="medium">
          <Label margin="none">Don't have an accont? <Anchor path="/a/register" label="Sign Up" tag={Link}/></Label>
        </Box>
      </Box>*/