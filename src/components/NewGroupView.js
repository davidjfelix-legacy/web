import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'
import {replace} from "react-router-redux"

import {ensureAuthenticated} from "./hocs"
import {createGroup} from '../actions/groups'

const mapStateToProps = ({auth}) => ({
  auth
})

// FIXME: try not to hardcode this redirectURL
const enhance = compose(
  connect(mapStateToProps),
  ensureAuthenticated('/groups/new'),
  withState('groupName', 'updateGroupName', ''),
  withHandlers({
    onGroupNameChange: props => event => {
      props.updateGroupName(event.target.value)
    },
    onNewGroupSubmit: props => event => {
      event.preventDefault()
      props.dispatch(createGroup({
        ownerId: props.auth.user.uid,
        groupName: props.groupName,
      }))
      props.dispatch(replace('/'))
    }
  })
)

const NewGroupView = ({groupName, onGroupNameChange, onNewGroupSubmit}) => (
  <div>
    <form id='newGroup' onSubmit={onNewGroupSubmit}/>
    <input
      form='newGroup'
      id='groupName'
      name='groupName'
      type='text'
      placeholder='Group Name'
      value={groupName}
      onChange={onGroupNameChange}
    />
    <input
      form='newGroup'
      type='submit'
      value='Create Group'
    />
  </div>
)


export default enhance(NewGroupView)
