import firebase from 'firebase'

import database from '../database'
import storage from '../storage'


export const ActionTypes = {
  ADD_VIDEO_UPLOAD: 'ADD_VIDEO_UPLOAD',
  UPDATE_UPLOAD_PROGRESS: 'UPDATE_UPLOAD_PROGRESS'
}


export const addVideoUpload = ({userId, uploadFile}) => (dispatch) => {
  const rawVideosRef = database.ref(`raw-videos/${userId}`)
  const rawVideoRef = rawVideosRef.push()
  rawVideoRef.set({'is_processed': false})
  const storageTask = storage.ref()
    .child(`raw-videos/${userId}/${rawVideoRef.key}`)
    .put(uploadFile)
  dispatch(
    {
      type: ActionTypes.ADD_VIDEO_UPLOAD,
      uploadId: rawVideoRef.key,
      storageTask,
    })
  storageTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      dispatch(
        {
          type: ActionTypes.UPDATE_UPLOAD_PROGRESS,
          uploadId: rawVideoRef.key,
          snapshot
        })
    }
  )
}
