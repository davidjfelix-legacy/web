import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap'
import {compose, withHandlers, withState} from 'recompose'


const enhance = compose(
  withState('email', 'updateEmail', ''),
  withState('password', 'updatePassword', ''),
  withHandlers(
    {
      onEmailChange: ({updateEmail}) => event => (updateEmail(event.target.value)),
      onPasswordChange: ({updatePassword}) => event => (updatePassword(event.target.value)),
      onEmailSubmit: ({email, password, mutate, redirectUrl}) => () => null,
      onFacebookSubmit: ({dispatch, redirectUrl}) => () => null,
      onGoogleSubmit: ({dispatch, redirectUrl}) => () => null,
    })
)

const LoginView = ({email, password, onEmailChange, onPasswordChange, onEmailSubmit, onFacebookSubmit, onGoogleSubmit}) => (
  <Container>
    <Row>
      <Col xl={{size: 4, offset: 4}}>
        <Form>
          <FormGroup>
            <Label
              for='email'
            >Email</Label>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={onEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label
              for='password'
            >Password</Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={onPasswordChange}
            />
          </FormGroup>
          <FormGroup>
            <Button
              block
              color='primary'
              onClick={onEmailSubmit}
            >Sign In</Button>
            <Button
              block
              color='primary'
              onClick={onFacebookSubmit}
            >Sign in with Facebook</Button>
            <Button
              block
              color='primary'
              onClick={onGoogleSubmit}
            >Sign in with Google</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
    <Row>
      <Col className='text-center' xl={{size: 2, offset: 5}}>
        <p>
          <Link to='/auth/register'>Register</Link>
        </p>
      </Col>
    </Row>
  </Container>
)

export default enhance(LoginView)
