import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  UPDATE_VIDEO: null,
  UPDATE_VIDEOS: null,
})

export const updateVideo = ({videoId, videoSnapshot}) => ({
  type: actionTypes.UPDATE_VIDEO,
  videoId,
  videoSnapshot
})

export const updateVideos = (videosSnapshot) => ({
  type: actionTypes.UPDATE_VIDEOS,
  videosSnapshot
})
