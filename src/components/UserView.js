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
    (props) => (`users/${props.params.userId}`),
    (props) => (snapshot) => (
      props.dispatch(updateUser({
        userId: props.params.userId,
        userSnapshot: snapshot.val()
      }))
    )
  ),
  withLoading(
    (props) => !(props.params.userId in props.users),
    UserLoading
  ),
  withNotFound(
    (props) => (props.users[props.params.userId] === null),
    UserNotFound
  )
)

const UserView = ({params, users}) =>(
  <div>
    {JSON.stringify(users[params.userId])}
  </div>
)

export default enhance(UserView);
