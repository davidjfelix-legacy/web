import React from 'react'
import {Link} from 'react-router-dom'

const UserGroupsList = ({userId, groupIds}) => (
  <ul>{groupIds.map((groupId) => (
    <li key={groupId}>
      <Link to={`/groups/${groupId}`}>
        {groupId}
      </Link>
    </li>
  ))
  }</ul>
)

export default UserGroupsList
