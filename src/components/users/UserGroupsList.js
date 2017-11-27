import React from 'react'
import {Link} from 'react-router-dom'
import Groupname from '../groups/Groupname'


const UserGroupsList = ({userId, groupIds}) => (
  <div>{groupIds.map((groupId) => (
    <div key={groupId}>
      <Link to={`/groups/${groupId}`}>
        <Groupname groupId={groupId}/>
      </Link>
    </div>
  ))
  }</div>
)

export default UserGroupsList
