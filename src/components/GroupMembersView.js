import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

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
  <div>{
    Object.keys(
      _.get(groups, `${groupName}.members`, {}))
      .map(
        (member_id) => (<div key={member_id}>{member_id}</div>
        )
      )
  }</div>
)

export default enhance(GroupMembersView)
