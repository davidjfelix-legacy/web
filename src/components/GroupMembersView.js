import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

import GroupMembersList from './GroupMembersList'

const mapStateToProps = ({groups}) => ({
  groups
})

const enhance = compose(
  withProps(({match}) => ({
    groupName: match.params.groupName
  })),
  connect(mapStateToProps)
)

const GroupMembersView = ({groups, groupName, match}) => (
  <div>
    <GroupMembersList
      groupId={groupName}
      memberIds={
        Object.keys(
          _.get(groups, `${groupName}.members`, {})
        )
      }
    />
  </div>
)

export default enhance(GroupMembersView)
