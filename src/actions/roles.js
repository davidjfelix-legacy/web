import database from '../database'


export const actionTypes = {
  ADD_MEMBER_TO_ROLE: 'ADD_MEMBER_TO_ROLE',
  UPDATE_ROLE: 'UPDATE_ROLE',
}

export const addMemberToRole = ({roleId, memberId}) => {
  const roleRef = database.ref(`roles/${roleId}`)
  const roleMemberRef = roleRef.child(`members/${memberId}`)
  roleMemberRef.set(
    {
      [memberId]: true
    })
}

export const updateRole = ({roleId, roleSnapshot}) => ({
  type: actionTypes.UPDATE_ROLE,
  roleId,
  roleSnapshot,
})
