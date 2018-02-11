import * as _ from 'lodash'
import * as React from 'react'
import {compose, withHandlers, withProps, withState} from 'recompose'

import GroupMembersList from './GroupMembersList'



const enhance = compose(
  withProps(({match}) => ({
    groupId: match.params.groupId
  })),
  withState('newGroupMember', 'updateNewGroupMember', ''),
  withHandlers(
    {
      onNewGroupMemberChange: props => event => {
        props.updateNewGroupMember(event.target.value)
      },
      onNewGroupMemberSubmit: props => event => {
        event.preventDefault()
      }
    }
  ),
)

const GroupMembersView = (
  {
    groups,
    groupId,
    newGroupMember,
    onNewGroupMemberSubmit,
    onNewGroupMemberChange,
  }
) => (
  <div>
    <GroupMembersList
      groupId={groupId}
      memberIds={
        Object.keys(
          _.get(groups, `${groupId}.members`, {})
        )
      }
    />
    <form onSubmit={onNewGroupMemberSubmit}>
      <input
        type='text'
        placeholder='Add New Member'
        value={newGroupMember}
        onChange={onNewGroupMemberChange}
      />
      <input
        type='submit'
        value='submit'
      />
    </form>
  </div>
)

export default enhance(GroupMembersView)
