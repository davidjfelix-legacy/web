import keyMirror from 'keyMirror';

const actionTypes = keyMirror({
  UPDATE_TIME: null,
});

const initialState = {
  currentTime: 0,
}

export function updateTime(currentTime) {
  return {
    currentTime,
    type: actionTypes.UPDATE_TIME,
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_TIME:
      return {
        ...state,
        currentTime: action.currentTime
      }
    default:
      return state;
  }
};
