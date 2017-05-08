import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import database from '../database'
import { updateUser } from '../actions/users'

const enhance = compose(
  connect(),
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`users/${this.props.params.userId}`)
      this.sonFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateUser({
            userId: this.props.params.userId,
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

const RegisterView = ({users}) =>(
  <div></div>
)

export default enhance(RegisterView);
