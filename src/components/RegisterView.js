import gql from 'graphql-tag'
import React from 'react'
import {Mutation} from 'react-apollo'
import {Link} from 'react-router-dom'
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap'
import {compose, withHandlers, withState} from 'recompose'
import * as _ from 'lodash'
import auth from '../auth'


const CREATE_USER_WITH_PASSWORD = gql`
  mutation createUserWithPassword(
    $email: String!,
    $password: String!,
    $userName: String!
  ) {
    createUserWithPassword(
      email: $email,
      password: $password,
      userName: $userName
    ) {
      user { id }
      authToken { header }
    }
  }
`

const enhance = compose(
  withState('email', 'updateEmail', ''),
  withState('password', 'updatePassword', ''),
  withState('name', 'updateName', ''),
  withState('userName', 'updateUserName', ''),
  withHandlers(
    {
      onEmailChange: ({updateEmail}) => event => updateEmail(event.target.value),
      onNameChange: ({updateName}) => event => updateName(event.target.value),
      onPasswordChange: ({updatePassword}) => event => updatePassword(event.target.value),
      onUserNameChange: ({updateUserName}) => event => updateUserName(event.target.value),
    })
)

const RegisterView = (
  {
    email,
    name,
    onEmailChange,
    onNameChange,
    onPasswordChange,
    onUserNameChange,
    onRegisterSubmit,
    password,
    userName,
  }) => (
  <Mutation mutation={CREATE_USER_WITH_PASSWORD}>{(createUserWithPassword, { data, loading, error }) => (
    <Container>
      <Row>
        <Col xl={{size: 4, offset: 4}}>
          <Form>
            <FormGroup>
              <Label
                for='name'
              >Full Name</Label>
              <Input
                id='name'
                type='text'
                placeholder='Full Name'
                value={name}
                onChange={onNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label
                for='email'
              >Email</Label>
              <Input
                id='email'
                type='email'
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
                form='register'
                id='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={onPasswordChange}
              />
            </FormGroup>
            <FormGroup>
              <Label
                for='userName'
              >Username</Label>
              <Input
                form='register'
                id='userName'
                type='text'
                placeholder='Username'
                value={userName}
                onChange={onUserNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Button
                block
                color='primary'
                onClick={() => {
                  createUserWithPassword(
                    {
                      variables: {email, userName, password}
                    }
                  ).then((data) => {
                    auth.setHeader(_.get(data, 'data.createUserWithPassword.authToken.header', ''))
                  })
                }}
              >Register</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className='text-center' xl={{size: 2, offset: 5}}>
          <p>Already a user? <Link to='/auth/login'>Sign in</Link></p>
        </Col>
      </Row>
      {loading && <p>loading...</p>}
    </Container>)}
  </Mutation>
)

export default enhance(RegisterView)
