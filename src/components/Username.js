import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {updateUser} from '../actions/users'
import {withDatabaseSubscribe, withLoading, withNotFound} from './hocs'
import LoadingView from './LoadingView'
import NotFoundView from './NotFoundView'


const mapStateToProps = ({users}) => ({
  users
})

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
    LoadingView
  ),
  withNotFound(
    (props) => (props.userId in props.users) && props.users[props.userId] === null,
    NotFoundView
  ),
)

const Username = ({userId, users}) => (
  <span>{users[userId]['username']}</span>
)

export default enhance(Username)
