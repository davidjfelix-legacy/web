import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_VIDEO_COMMENTS: null,
})

export const updateVideoComments = ({ videoId, videoCommentsSnapshot }) => ({
  type: actionTypes.UPDATE_VIDEO_COMMENTS,
  videoId,
  videoCommentsSnapshot,
})