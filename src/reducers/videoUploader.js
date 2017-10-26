import {ActionTypes} from '../actions/videoUploader'


const initialState = {
  isUploadPaneVisible: false,
  isShowUploadPaneButtonVisible: false,
  uploads: {}
}

const reducer = (state = initialState, {type, uploadId, uploadFile}) => {
  switch (type) {
    case ActionTypes.ADD_VIDEO_UPLOAD:
      return {
        ...state,
        [uploadId]: uploadFile
      }
    default:
      return state
  }
}

export default reducer