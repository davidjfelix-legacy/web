import { actionTypes } from '../actions/comments'

const initalState = {}

const reducer = (state=initalState, action) => {
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