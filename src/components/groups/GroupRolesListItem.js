import _ from 'lodash'
import React from 'react'
import {compose, withHandlers, withProps} from 'recompose'
import {connect} from 'react-redux'

import {addMemberToRole} from '../../actions/groups'


const enhance = compose(
  connect(),
  withProps('newRoleMember', 'updateNewRoleMember', ''),
  withHandlers(
    {
      onNewRoleMemberChange: props => event => {
        props.updateNewRoleMember(event.target.value)
      },
      onNewRoleMemberSubmit: props => event => {
        event.preventDefault()
        props.dispatch(addMemberToRole(
          {
            groupId: props.groupId,
            roleId: props.roleId,
            memberId: props.newRoleMember,
          }
        ))
      }
    }
  ),
)

const GroupRolesListItem = (
  {
    groupId,
    newRoleMember,
    onNewRoleMemberChange,
    onNewRoleMemberSubmit,
    roleId,
    role,
  }
) => (
  <li>
    <span>{_.get(role, 'role_name', 'Unnamed')}</span>
    <form onSubmit={onNewRoleMemberSubmit}>
      <input
        type='text'
        placeholder='Add a member to the role'
        value={newRoleMember}
        onChange={onNewRoleMemberChange}

      />
      <input
        type='submit'
        value='submit'
      />
    </form>
  </li>
)

export default enhance(GroupRolesListItem)
