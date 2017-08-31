import React from 'react'
import Username from './Username'
import {Link} from 'react-router-dom'

const GroupMembersList = ({groupId, memberIds}) => (
  <ul>{memberIds.map((memberId) => (
    <li key={memberId}>
      <Link to={`/users/${memberId}`}>
        <Username userId={memberId}/>
      </Link>
    </li>
  ))
  }</ul>
)

export default GroupMembersList
