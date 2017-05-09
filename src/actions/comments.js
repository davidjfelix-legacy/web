import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_COMMENT: null,
})

export const updateComment = ({ commentId, commentSnapshot }) => ({
  type: actionTypes.UPDATE_COMMENT,
  commentId,
  commentSnapshot,
})