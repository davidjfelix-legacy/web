import { actionTypes } from '../actions/polls'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_GROUP:
      return {
        ...state,
        [action.pollId]: action.pollSnapshot,
      }
    default:
      return state
  }
}

export default reducer
