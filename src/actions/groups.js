import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_GROUP: null,
})

export const updateGroup = ({ groupId, groupSnapshot }) => ({
  type: actionTypes.UPDATE_GROUP,
  groupId,
  groupSnapshot,
})
