import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateUser } from '../actions/users'
import database from '../database'


const mapStateToProps = ({users}) => ({
  users
})

let onFirebaseValue = null

class UserView extends Component {
  componentWillMount() {
    this.databaseRef = database.ref(`users/${this.props.params.userId}`)
    onFirebaseValue = this.databaseRef.on('value', (snapshot) => (
      this.props.dispatch(updateUser({
        userId: this.props.params.userId,
        userSnapshot: snapshot.val()
      }))
    ))
  }

  componentWillUnmount() {
    this.databaseRef.off('value', onFirebaseValue)
  }

  render() {
    return (
      <div></div>
    );
  }
};

export default connect(mapStateToProps)(UserView);
