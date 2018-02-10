import _ from 'lodash'
import React from 'react'
import {compose, withProps} from 'recompose'

import UserGroupsList from './UserGroupsList'


const enhance = compose(
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
