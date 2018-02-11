import _ from 'lodash'
import React from 'react'
import {compose, withHandlers, withProps, withState} from 'recompose'

import GroupRolesList from './GroupRolesList'


const enhance = compose(
  withProps(({match}) => ({
    groupId: match.params.groupId
  })),
  withState('newRole', 'updateNewRole', {roleName: ''}),
  withHandlers(
    {
      onNewRoleNameChange: props => event => {
        props.updateNewRole(
          {
            ...props.newRole,
            roleName: event.target.value,
          })
      },
      onNewRoleSubmit: props => event => {
        event.preventDefault()
      }
    }
  ),
)

const GroupRolesView = (
  {
    groups,
    groupId,
    onNewRoleNameChange,
    onNewRoleSubmit,
    newRole,
  }
) => (
  <div>
    <GroupRolesList
      groupId={groupId}
      roles={
        Object.keys(_.get(groups, `${groupId}.roles`, {}))
      }
    />
    <form onSubmit={onNewRoleSubmit}>
      <input
        type='text'
        placeholder='New Role Name'
        value={newRole.roleName}
        onChange={onNewRoleNameChange}
      />
      <input
        type='submit'
        value='submit'
      />
    </form>
  </div>
)

export default enhance(GroupRolesView)
