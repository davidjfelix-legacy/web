import database from '../database'


export const actionTypes = {
  CREATE_VIDEO: 'CREATE_VIDEO',
  UPDATE_VIDEO: 'UPDATE_VIDEO',
  UPDATE_VIDEOS: 'UPDATE_VIDEOS',
}

export const VideoOwnerTypes = {
  USER_VIDEO: 'USER_VIDEO',
  GROUP_VIDEO: 'GROUP_VIDEO'
}

export const VideoStates = {
  UNINITIALIZED: 'UNINITIALIZED',
  INITIALIZED: 'INITIALIZED',
  PUBLISHED: 'PUBLISHED'
}

// FIXME: make async. Define video better
export const createVideo = ({videoOwnerType, ownerId}) => {
  const videoList = database.ref('videos')
  const videoRef = videoList.push()
  videoRef.set(
    {
      owner_id: ownerId,
      video_state: VideoStates.UNINITIALIZED,
      video_owner_type: videoOwnerType
    }
  )
  return {
    type: actionTypes.CREATE_GROUP,
    videoState: VideoStates.UNINITIALIZED,
    videoOwnerType,
    ownerId,
  }
}

export const updateVideo = ({videoId, videoSnapshot}) => ({
  type: actionTypes.UPDATE_VIDEO,
  videoId,
  videoSnapshot
})

export const updateVideos = (videosSnapshot) => ({
  type: actionTypes.UPDATE_VIDEOS,
  videosSnapshot
})
