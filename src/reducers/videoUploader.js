import {ActionTypes} from '../actions/videoUploader'


const initialState = {
  isUploadPaneVisible: false,
  isShowUploadPaneButtonVisible: false,
  uploads: {}
}

const reducer = (state = initialState, {type, uploadId, storageTask, storageTaskSnapshot}) => {
  switch (type) {
    case ActionTypes.ADD_VIDEO_UPLOAD:
      return {
        ...state,
        [uploadId]: {
          storageTask,
          storageTaskSnapshot,
        }
      }
    case ActionTypes.UPDATE_UPLOAD_PROGRESS:
      return {
        ...state,
        [uploadId]: {
          storageTask,
          storageTaskSnapshot,
        }
      }
    default:
      return state
  }
}

export default reducer