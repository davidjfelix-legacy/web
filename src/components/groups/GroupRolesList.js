import _ from 'lodash'
import React from 'react'

import GroupRolesListItem from './GroupRolesListItem'


const GroupRolesList = ({groupId, roles}) => (
  <ul>
    {Object.keys(roles).map((roleId) => (
      <GroupRolesListItem key={roleId} groupId={groupId} roleId={roleId} role={_.get(roles, roleId, {})}/>
    ))}
  </ul>
)

export default GroupRolesList
