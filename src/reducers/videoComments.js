import { actionTypes } from '../actions/videoComments'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_VIDEO_COMMENT:
      return state
    case actionTypes.UPDATE_VIDEO_COMMENTS:
      return {
        ...state,
        [action.videoId]: action.videoCommentsSnapshot,
      }
    default:
      return state
  }
}

export default reducer