import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

import UserGroupsList from './UserGroupsList'

const mapStateToProps = ({users}) => ({
  users
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    userId: match.params.userId
  }))
)

const UserGroups = ({userId, users}) => (
  <div>
    <UserGroupsList
      userId={userId}
      groupIds={
        Object.keys(
          _.get(users, `${userId}.groups`, {})
        )
      }
    />
  </div>
)

export default enhance(UserGroups)
