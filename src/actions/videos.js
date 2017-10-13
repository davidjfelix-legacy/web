import {push} from 'react-router-redux'
import database from '../database'


export const actionTypes = {
  CREATE_VIDEO: 'CREATE_VIDEO',
  CREATE_VIDEO_ERROR: 'CREATE_VIDEO_ERROR',
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
export const createVideo = ({videoOwnerType, ownerId}) => (dispatch) => {
  const videoList = database.ref('videos')
  const videoRef = videoList.push()
  switch (videoOwnerType) {
    case VideoOwnerTypes.USER_VIDEO:
      const userVideoRef = database.ref(`users/${ownerId}/videos/${videoRef.key}`)
      userVideoRef.set(true)
      break
    case VideoOwnerTypes.GROUP_VIDEO:
      const groupVideoRef = database.ref(`groups/${ownerId}/videos/${videoRef.key}`)
      groupVideoRef.set(true)
      break
    default:
      return {
        type: actionTypes.CREATE_VIDEO_ERROR
      }
  }

  videoRef.set(
    {
      owner_id: ownerId,
      video_state: VideoStates.UNINITIALIZED,
      video_owner_type: videoOwnerType
    }
  )
  dispatch(push(`/videos/${videoRef.key}`))
  return {
    type: actionTypes.CREATE_VIDEO,
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
