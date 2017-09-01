import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_POLL: null,
})

export const updatePoll = ({ pollId, pollSnapshot }) => ({
  type: actionTypes.UPDATE_POLL,
  pollId,
  pollSnapshot,
})
