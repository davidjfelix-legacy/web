import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  UPDATE_USER_VIDEOS: null,
})

export const updateUserVideos = ({ userId, userVideosSnapshot }) => ({
  type: actionTypes.UPDATE_USER_VIDEOS,
  userId,
  userVideosSnapshot,
})
