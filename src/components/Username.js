import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import database from '../database'
import { updateUser } from '../actions/users'


const style = {
  display: 'inline'
}

const mapStateToProps = ({users}) => ({users})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`users/${this.props.userId}`)
      this.sonFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateUser({
            userId: this.props.userId,
            userSnapshot: snapshot.val()
          }))
        )
      )
    },
    componentWillUnmount() {
      this.databaseRef.off('value', this.onFirebaseValue)
    },
  }),
)

const Username = ({userId, users}) => (
  <span style={style}>
    {(userId in users) && (users[userId] !== null) ?
      users[userId]['username'] : "" }
  </span>
)

export default enhance(Username)
