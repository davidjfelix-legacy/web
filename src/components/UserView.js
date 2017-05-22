import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { updateUser } from '../actions/users'

import { withDatabaseSubscribe, withLoading, withNotFound } from './hocs'

const mapStateToProps = ({users}) => ({
  users
})

const UserLoading = () => (
  <div>...</div>
)

const UserNotFound = () => (
  <div>User not found</div>
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
    UserLoading
  ),
  withNotFound(
    (props) => (props.users[props.userId] === null),
    UserNotFound
  )
)

const UserView = ({children, userId, users}) => (
  <div>
    {JSON.stringify(users[userId])}
    {children}
  </div>
)

export default enhance(UserView);
