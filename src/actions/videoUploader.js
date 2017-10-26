import firebase from 'firebase'

import database from '../database'
import storage from '../storage'


export const ActionTypes = {
  ADD_VIDEO_UPLOAD: 'ADD_VIDEO_UPLOAD',
  UPDATE_UPLOAD_PROGRESS: 'UPDATE_UPLOAD_PROGRESS'
}


export const addVideoUpload = ({userId, uploadFile}) => (dispatch) => {
  const rawVideosRef = database.ref('raw-videos/')
  const rawVideoRef = rawVideosRef.push()
  const userRawVideoRef = database.ref(`users/${userId}/raw-videos`)
  userRawVideoRef.update(
    {
      [rawVideoRef.key]: true
    })
  rawVideoRef.set(
    {
      'owner_id': userId,
      'is_processed': false,
    })
  const storageTask = storage.ref()
    .child(`raw-videos/${rawVideoRef.key}`)
    .put(uploadFile)
  dispatch(
    {
      type: ActionTypes.ADD_VIDEO_UPLOAD,
      uploadId: rawVideoRef.key,
      storageTask,
      storageTaskSnapshot: {},
    })
  storageTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    (storageTaskSnapshot) => {
      dispatch(
        {
          type: ActionTypes.UPDATE_UPLOAD_PROGRESS,
          uploadId: rawVideoRef.key,
          storageTask,
          storageTaskSnapshot,
        })
    }
  )
}
