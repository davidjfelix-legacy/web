import { actionTypes } from '../actions/users';

const initalState = {
  isFetching: false,
  currentUser: {}
}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        currentUser: {},
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.user
      };
    case actionTypes.GET_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        currentUser: {},
      };
    default:
      return state;
  }
}

export default reducer;