import React from 'react'
import {compose, withHandlers, withState} from 'recompose'


const enhance = compose(
  withState('groupName', 'setGroupName', ''),
  withHandlers({
    onGroupNameChange: props => event => {
      props.setGroupName(event.target.value)
    },
    onNewGroupSubmit: props => event => {
      event.preventDefault()
      // FIXME: wait for it to be created. Capture issues and redirect to the actual group
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
