import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { updateUser } from '../actions/users'

import { withDatabaseSubscribe } from './hocs'


const style = {
  display: 'inline'
}

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
)

const Username = ({userId, users}) => (
  <span style={style}>
    {(userId in users) && (users[userId] !== null) ?
      users[userId]['username'] : "" }
  </span>
)

export default enhance(Username)
