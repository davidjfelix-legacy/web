import { actionTypes } from '../actions/authentication';

const initalState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') ? true : false
}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        creds: action.creds
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        creds: {},
        errorMessage: '',
      };
    case actionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      };
    default:
      return state;
  }
}

export default reducer;