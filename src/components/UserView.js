import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withContext } from 'recompose'

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
  ),
  withContext(
    {baseUrl: PropTypes.string.isRequired},
    (props) => ({baseUrl: props.baseUrl})
  )
)

const UserView = ({baseUrl, isEditable=false, children, userId, users}) => (
  <div style={{display: 'flex', flexDirection: 'row'}}>
    <img src='http://placekitten.com/g/200/200' alt={`${users[userId].username}`} />
    {children}
  </div>
)

export default enhance(UserView);
