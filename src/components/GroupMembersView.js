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
  withState('newGroupMember', 'updateNewGroupMember', ''),
  withHandlers({
    onNewGroupMemberChange: props => event => {
      props.updateNewGroupMember(event.target.value)
    },
    onNewGroupMemberSubmit: props => event => {
      event.preventDefault()
      props.dispatch(addMemberToGroup({
        groupId: props.groupId,
        memberId: props.newGroupMember,
      }))
    }
  }),
)

const GroupMembersView = ({
                            groups,
                            groupId,
                            onNewGroupMemberSubmit,
                            onNewGroupMemberChange,
                            newGroupMember,
                          }) => (
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
