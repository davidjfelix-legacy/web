import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_USER: null,
})

export const updateUser = ({userId, userSnapshot}) => ({
  type: actionTypes.UPDATE_USER,
  userId,
  userSnapshot,
})