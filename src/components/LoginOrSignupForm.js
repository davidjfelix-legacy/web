import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Container, Form, Input, Row } from  'reactstrap'
//import { Link } from 'react-router';
import { connect } from 'react-redux'

//import { loginUser } from '../actions/authentication';

import { FACEBOOK_CLIENT_ID, MG4_WEB_BASE_URL } from '../configuration'


const formFieldProps = {
  xs: {
    size: 10,
    offset: 1,
  },
  sm: {
    size: 8,
    offset: 2,
  },
  md: {
    size: 6,
    offset: 3,
  },
  lg: {
    size: 4,
    offset: 4,
  },
  xl: {
    size: 4,
    offset: 4,
  }
}

const LoginOrSignupForm = () => (
  <Container>
    <Row>
      <Col {...formFieldProps}>
        <Form action="https://www.facebook.com/v2.8/dialog/oauth">
          <Input type="hidden" name="client_id" value={FACEBOOK_CLIENT_ID} />
          <Input type="hidden" name="redirect_uri" value={MG4_WEB_BASE_URL + "/a/facebook"} />
          <Input type="hidden" name="scope" value="email" />
          <Button type="submit" block>Log in with Facebook</Button>
        </Form>
      </Col>
    </Row>
    <Row>
      <Col {...formFieldProps} >
        <Form>
          <Button block>Log in with Google</Button>
        </Form>
      </Col>
    </Row>
    <Row>
      <Col {...formFieldProps}>- or -</Col>
    </Row>
    <Row>
      <Col {...formFieldProps}>
        <Form>
          <Input type="email" placeholder="Username or Email"/>
          <Input type="password" placeholder="Password"/>
          <Button block>Log in</Button>
        </Form>
      </Col>
    </Row>
    <Row>
      <Col {...formFieldProps}>Don't have an accont? Register</Col>
    </Row>
</Container>
);

LoginOrSignupForm.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(LoginOrSignupForm)
