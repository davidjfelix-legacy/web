import database from '../database'


export const actionTypes = {
  CREATE_VIDEO: 'CREATE_VIDEO',
  UPDATE_VIDEO: 'UPDATE_VIDEO',
  UPDATE_VIDEOS: 'UPDATE_VIDEOS',
}

export const createVideo = ({video, videoOwnerType, ownerId}) => {
  const videoList = database.ref('videos')
  const videoRef = videoList.push()
  videoRef.set(
    {
      ...video,
      owner_id: ownerId,
      video_owner_type: videoOwnerType
    }
  )
  return {
    type: actionTypes.CREATE_GROUP,
    video,
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
