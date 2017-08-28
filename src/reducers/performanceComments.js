import {actionTypes} from '../actions/performanceComments'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PERFORMANCE_COMMENT:
      return state
    case actionTypes.UPDATE_PERFORMANCE_COMMENTS:
      return {
        ...state,
        [action.performanceId]: action.performanceCommentsSnapshot,
      }
    default:
      return state
  }
}

export default reducer