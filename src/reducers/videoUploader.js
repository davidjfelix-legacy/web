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
        isUploadPaneVisible: true,
        uploads: {
          ...state.uploads,
          [uploadId]: {
            storageTask,
            storageTaskSnapshot,
          }
        }
      }
    case ActionTypes.HIDE_UPLOAD_PANE:
      return {
        ...state,
        isUploadPaneVisible: false,
        isShowUploadPaneButtonVisible: true,
      }
    case ActionTypes.UPDATE_UPLOAD_PROGRESS:
      return {
        ...state,
        uploads: {
          ...state.uploads,
          [uploadId]: {
            storageTask,
            storageTaskSnapshot,
          }
        }
      }
    default:
      return state
  }
}

export default reducer