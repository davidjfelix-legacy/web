import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps, withState} from 'recompose'

import GroupMembersList from './GroupMembersList'
import {addMemberToGroup} from '../actions/groups'

const mapStateToProps = ({groups}) => ({
  groups
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    groupId: match.params.groupId
  })),
  withState('newMember', 'updateNewMember', ''),
  withHandlers({
    onNewMemberChange: props => event => {
      props.updateNewMember(event.target.value)
    },
    onNewGroupMemberSubmit: props => event => {
      event.preventDefault()
      props.dispatch(addMemberToGroup({
        groupId: props.groupId,
        memberId: props.newMember,
      }))
    }
  }),
)

const GroupMembersView = ({groups, groupId, onNewGroupMemberSubmit, onNewMemberChange, newMember}) => (
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
      <textarea
        placeholder='Add New Member'
        value={newMember}
        onChange={onNewMemberChange}
      />
      <input
        type='submit'
        value='submit'
      />
    </form>
  </div>
)

export default enhance(GroupMembersView)
