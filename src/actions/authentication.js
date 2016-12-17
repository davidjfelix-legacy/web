import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  LOGIN_USER_FAILURE: null,
  LOGIN_USER_REQUEST: null,
  LOGIN_USER_SUCCESS: null,
});


const requestLogin = (creds) => ({
  type: actionTypes.LOGIN_USER_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
});

const recieveLogin = (token) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token
});

const loginError = (message) => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
})

export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin(creds));

  // TODO: extract URL to config
  // TODO: utilize HTTPS
  // TODO: move this logic to an API file
  return fetch('http://api.mg4.tv/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify(creds)
  }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        dispatch(recieveLogin(json.token));
        localStorage.setItem('token', json.token);
      });
    } else {
      response.json().then((json) => {
        dispatch(loginError(json.message));
        Promise.reject();
      });
    }
  }).catch(err => console.log("Error: ", err));
};