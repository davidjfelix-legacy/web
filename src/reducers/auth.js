import { actionTypes } from '../actions/auth'

const initialState = {
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_AUTH:
      return {
        user: action.user
      }
    default:
      return state
  }
}

export default reducer