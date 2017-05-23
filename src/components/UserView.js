import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router'

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

const UserView = ({children, userId, users, baseUrl}) => (
  <div>
    <img src='http://placekitten.com/g/200/200' alt={`${users[userId].username}`} />
    <nav>
      <Link to={`${baseUrl}/videos`}>Videos</Link>
      <Link to={`${baseUrl}/organizations`} />
      <Link to={`${baseUrl}/following`} />
      <Link to={`${baseUrl}/followers`} />
      <Link to={`${baseUrl}/shows`} />
      <Link to={`${baseUrl}/series`} />
      <Link to={`${baseUrl}/playlists`} />
    </nav>
    {children}
  </div>
)

export default enhance(UserView);
