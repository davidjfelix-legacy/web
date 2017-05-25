import { actionTypes } from '../actions/userVideos'

const initalState = {}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_VIDEOS:
      return {
        ...state,
        [action.userId]: action.userVideosSnapshot,
      }
    default:
      return state
  }
}

export default reducer