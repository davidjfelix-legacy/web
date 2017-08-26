import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_EMOJI: null,
})

export const updateEmoji = ({ emojiId, emojiSnapshot }) => ({
  type: actionTypes.UPDATE_EMOJI,
  emojiId,
  emojiSnapshot,
})
