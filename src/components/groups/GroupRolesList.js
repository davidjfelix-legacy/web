import React from 'react'

import GroupRolesListItem from './GroupRolesListItem'


const GroupRolesList = ({groupId, roles=[]}) => (
  <ul>
    {roles.map((roleId) => (
      <GroupRolesListItem key={roleId} groupId={groupId} roleId={roleId}/>
    ))}
  </ul>
)

export default GroupRolesList
