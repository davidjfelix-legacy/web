import {actionTypes} from '../actions/roles'


const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ROLE:
      return {
        ...state,
        [action.roleId]: action.roleSnapshot,
      }

    default:
      return state
  }
}

export default reducer
