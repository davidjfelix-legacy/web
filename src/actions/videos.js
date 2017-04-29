import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  UPDATE_VIDEOS: null,
})

export const updateVideos = (videosSnapshot) => ({
  type: actionTypes.UPDATE_VIDEOS,
  videosSnapshot
})