import { actionTypes } from '../actions/videoComments';

const initalState = {}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_VIDEO_COMMENTS:
      return {
        ...state,
        [action.videoId]: action.videoCommentsSnapshot,
      }
    default:
      return state;
  }
}

export default reducer;