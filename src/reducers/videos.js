import { actionTypes } from '../actions/videos'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_VIDEO:
      return {
        ...state,
        [action.videoId]: action.videoSnapshot,
      }
    case actionTypes.UPDATE_VIDEOS:
      return {
        ...action.videosSnapshot
      }
    default:
      return state
  }
}

export default reducer