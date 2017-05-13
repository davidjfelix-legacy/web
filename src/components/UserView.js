import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { updateUser } from '../actions/users'

import { withDatabaseSubscribe } from './hocs'

const mapStateToProps = ({users}) => ({
  users
})

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
)

const UserView = ({dispatch, params, users}) =>(
  <div>
    {users[params.userId] !== null ?
      JSON.stringify(users[params.userId]) :
      "404 User Not found."
    }
  </div>
)

export default enhance(UserView);
