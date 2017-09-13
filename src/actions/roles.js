export const actionTypes = {
  UPDATE_ROLE: 'UPDATE_ROLE'
}

export const updateRoll = ({roleId, roleSnapshot}) => ({
  type: actionTypes.UPDATE_ROLE,
  roleId,
  roleSnapshot,
})