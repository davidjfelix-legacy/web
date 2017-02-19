import React, { PropTypes } from 'react';
import { Button, Col, Container, Form, Input, Row } from  'reactstrap';
//import { Link } from 'react-router';
import { connect } from 'react-redux';

//import { loginUser } from '../actions/authentication';

import { FACEBOOK_CLIENT_ID, MG4_WEB_BASE_URL } from '../configuration';


class LoginOrSignupForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 4, push: 1, pull: 1, offset: 3 }} >
            <Form action="https://www.facebook.com/v2.8/dialog/oauth">
              <Input type="hidden" name="client_id" value={FACEBOOK_CLIENT_ID} />
              <Input type="hidden" name="redirect_uri" value={MG4_WEB_BASE_URL + "/a/facebook"} />
              <Input type="hidden" name="scope" value="email" />
              <Button type="submit" block>Log in with Facebook</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 4, push: 1, pull: 1, offset: 3 }} >
            <Form>
              <Button block>Log in with Google</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 4, push: 1, pull: 1, offset: 3 }} >- or -</Col>
        </Row>
        <Row>
          <Col sm={{ size: 4, push: 1, pull: 1, offset: 3 }} >
            <Form>
              <Input type="email" placeholder="Username or Email"/>
              <Input type="password" placeholder="Password"/>
              <Button block>Log in</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>Don't have an accont? Register</Col>
        </Row>
      </Container>
    );
  }
};

LoginOrSignupForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}


LoginOrSignupForm = connect()(LoginOrSignupForm)

export default LoginOrSignupForm;
