import { actionTypes } from '../actions/userVideos'

const initialState = {}

const reducer = (state=initialState, action) => {
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