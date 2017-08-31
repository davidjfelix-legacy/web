import { actionTypes } from '../actions/groups'

const initialState = {}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_GROUP:
      return {
        ...state,
        [action.groupId]: action.groupSnapshot.toJSON(),
      }
    default:
      return state
  }
}

export default reducer
