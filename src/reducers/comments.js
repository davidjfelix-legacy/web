import { actionTypes } from '../actions/comments'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COMMENT:
      return {
        ...state,
        [action.commentId]: action.commentSnapshot,
      }
    default:
      return state
  }
}

export default reducer