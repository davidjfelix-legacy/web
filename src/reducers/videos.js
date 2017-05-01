import { actionTypes } from '../actions/videos'

const initalState = {}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_VIDEO:
      return {
        ...state,
        [action.videoId]: action.videosSnapshot,
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