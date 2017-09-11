import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps, withState} from 'recompose'
import {addRoleToGroup} from '../../actions/groups'


const mapStateToProps = ({groups}) => ({
  groups
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    groupId: match.params.groupId
  })),
  withState('newRole', 'updateNewRole', {roleName: ''}),
  withHandlers({
    onNewRoleNameChange: props => event => {
      props.updateNewRole({
        ...props.newRole,
        roleName: event.target.value,
      })
    },
    onNewRoleSubmit: props => event => {
      event.preventDefault()
      props.dispatch(addRoleToGroup({
        groupId: props.groupId,
        roleName: props.newRole.roleName,
      }))
    }
  }),
)

const GroupRolesView = ({
                          groups,
                          groupId,
                          onNewRoleNameChange,
                          onNewRoleSubmit,
                          newRole,
                        }) => (
  <div>
    {Object.keys(_.get(groups, `${groupId}.roles`, {}))
      .map((roleId) => {
        console.log(roleId)
        return _.get(groups, `${groupId}.roles.${roleId}.role_name`, 'Unnamed')
      })}
    <form onSubmit={onNewRoleSubmit}>
      <textarea
        placeholder='New Role Name'
        value={newRole.roleName}
        onChange={onNewRoleNameChange}
      />
      <input
        type='submit'
        value='submit'
      />
    </form>
  </div>
)

export default enhance(GroupRolesView)
