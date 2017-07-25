import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, defaultProps, withContext } from 'recompose'

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


export const context = {
  baseUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  isEditable: PropTypes.bool,
}

const enhance = compose(
  connect(mapStateToProps),
  defaultProps({isEditable: false}),
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
    context,
    (props) => ({
      baseUrl: props.baseUrl,
      userId: props.userId,
      isEditable: props.isEditable,
    })
  )
)

const UserView = ({baseUrl, isEditable, children, userId, users}) => (
  <div style={{display: 'flex', flexDirection: 'row'}}>
    <img
      style={{alignSelf: 'flex-start', borderRadius: '0.5em'}}
      src='http://placekitten.com/g/200/200'
      alt={`${users[userId].username}`} />
    {children}
  </div>
)

export default enhance(UserView);
