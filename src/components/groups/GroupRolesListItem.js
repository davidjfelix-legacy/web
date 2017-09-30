import _ from 'lodash'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import {addMemberToRole, updateRole} from '../../actions/roles'
import {withDatabaseSubscribe} from '../hocs'
import Username from '../Username'


const mapStateToProps = ({roles}) => ({
  roles,
})

const enhance = compose(
  connect(mapStateToProps),
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
  withDatabaseSubscribe(
    'value',
    (props) => (`roles/${props.roleId}`),
    (props) => (snapshot) => (props.dispatch(updateRole(
      {
        roleId: props.roleId,
        roleSnapshot: snapshot.val(),
      }
    )))
  )
)

const GroupRolesListItem = (
  {
    groupId,
    newRoleMember,
    onNewRoleMemberChange,
    onNewRoleMemberSubmit,
    roleId,
    roles,
  }
) => (
  <li>
    <span>{_.get(roles, `${roleId}.role_name`, 'Unnamed')}</span>
    <ul>
      {Object.keys(_.get(roles, `${roleId}.members`, {})).map(
        (memberId) => (
          <li key={memberId}>
            <Link to={`/users/${memberId}`}>
              <Username userId={memberId}/>
            </Link>
          </li>
        )
      )}
    </ul>
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
