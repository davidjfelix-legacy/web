import keyMirror from 'keymirror';

import { MG4_API_BASE_URL } from '../configuration';

export const actionTypes = keyMirror({
  GET_USER_FAILURE: null,
  GET_USER_REQUEST: null,
  GET_USER_SUCCESS: null,
});


const getUserRequest = (username) => ({
  type: actionTypes.GET_USER_REQUEST,
  isFetching: true,
  username,
});

const getUserSuccess = (user) => ({
  type: actionTypes.GET_USER_SUCCESS,
  isFetching: false,
  user,
});

const getUserFailure = (message) => ({
  type: actionTypes.GET_USER_FAILURE,
  isFetching: false,
  message,
});

export const getUser = (username) => (dispatch) => {
  dispatch(getUserRequest(username));

  // TODO: move this logic to an API file
  return fetch(MG4_API_BASE_URL + '/userByUsername/' + username, {
    method: 'GET',
    headers: {'Accept': 'application/json', 'Accept-Charset': 'utf-8'},
  }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        dispatch(getUserSuccess(json));
        localStorage.setItem('token', json.token);
      });
    } else {
      response.json().then((json) => {
        dispatch(getUserFailure(json.message));
        Promise.reject();
      });
    }
  }).catch(err => console.log("Error: ", err));
};