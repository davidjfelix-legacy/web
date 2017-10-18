import { actionTypes } from '../actions/videos'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.REFRESH_VIDEO:
      return {
        ...state,
        [action.videoId]: action.videoSnapshot,
      }
    case actionTypes.REFRESH_VIDEOS:
      return {
        ...action.videosSnapshot
      }
    default:
      return state
  }
}

export default reducer