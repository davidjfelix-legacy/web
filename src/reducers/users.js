import { actionTypes } from '../actions/users';

const initalState = {}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        [action.userId]: action.userSnapshot,
      }
    default:
      return state;
  }
}

export default reducer;