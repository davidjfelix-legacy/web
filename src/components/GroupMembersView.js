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
    onNewGroupMember: props => event => {
      event.preventDefault()
      props.dispatch(addMemberToGroup({
        groupId: props.groupId,
        memberId: props.newMember,
      }))
    }
  }),
)

const GroupMembersView = ({groups, groupId, onNewGroupMember, onNewMemberChange, newComment}) => (
  <div>
    <GroupMembersList
      groupId={groupId}
      memberIds={
        Object.keys(
          _.get(groups, `${groupId}.members`, {})
        )
      }
    />
    <form>
      <textarea
        placeholder='Add New Member'
        value={newMember}
      />
      <input
        type='submit'
        value='submit'
      />
    </form>
  </div>
)

export default enhance(GroupMembersView)
