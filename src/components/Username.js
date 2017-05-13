import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { updateUser } from '../actions/users'

import { withDatabaseSubscribe, withLoading, withNotFound } from './hocs'


const mapStateToProps = ({users}) => ({
  users
})

const UsernameLoading = () => (
  <span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </span>
)

const UsernameNotFound = () => (
  <span>[deleted]</span>
)

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}`),
    (props) => (snapshot) => (
      props.dispatch(updateUser({
        userId: props.userId,
        userSnapshot: snapshot.val()
      }))
    )
  ),
  withLoading(
    (props) => !(props.userId in props.users),
    UsernameLoading
  ),
  withNotFound(
    (props) => (props.userId in props.users) && props.users[props.userId] === null,
    UsernameNotFound
  ),
)

const Username = ({userId, users}) => (
  <span>{users[userId]['username']}</span>
)

export default enhance(Username)
