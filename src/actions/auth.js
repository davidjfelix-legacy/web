import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_AUTH: null,
})

export const updateAuth = ({user}) => ({
  type: actionTypes.UPDATE_AUTH,
  user,
})