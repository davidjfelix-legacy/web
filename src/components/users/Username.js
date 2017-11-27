import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {updateUser} from '../../actions/users'
import {withDatabaseSubscribe, withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'


const mapStateToProps = ({users}) => ({
  users
})

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}`),
    (props) => (snapshot) => (
      props.dispatch(updateUser(
        {
          userId: props.userId,
          userSnapshot: snapshot.val()
        }))
    )
  ),
  withLoading(
    ({users, userId}) => !(_.has(users, userId)),
    LoadingView
  ),
  withNotFound(
    ({users, userId}) => (userId in users) && users[userId] === null,
    NotFoundView
  ),
)

const Username = ({userId, users}) => (
  <span>{_.get(users, `${userId}.username`, '[Not Found]')}</span>
)

export default enhance(Username)
