import { actionTypes } from '../actions/comments'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_EMOJI:
      return {
        ...state,
        [action.emojiId]: action.emojiSnapshot,
      }
    default:
      return state
  }
}

export default reducer
