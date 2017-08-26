import { actionTypes } from '../actions/users'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_OR_UPDATE_USER_PROFILE:
      return state
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        [action.userId]: action.userSnapshot,
      }
    default:
      return state
  }
}

export default reducer