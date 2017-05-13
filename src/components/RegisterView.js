import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { updateUser } from '../actions/users'

import { withDatabaseSubscribe } from './hocs'

const enhance = compose(
  connect(),
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

const RegisterView = ({users}) =>(
  <div></div>
)

export default enhance(RegisterView);
