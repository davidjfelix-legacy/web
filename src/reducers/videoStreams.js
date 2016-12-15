import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  UPDATE_TIME: null,
  FRAME_RESIZE: null,
});

const initialState = {
  currentTime: 0,
  addOns: [
    {
      type: 'CommentStream'
    },
    {
      type: 'StreamingPoll'
    },
    {
      type: 'UnrecognizedAddOn'
    }
  ]
}

export function updateTime(currentTime) {
  return {
    currentTime,
    type: actionTypes.UPDATE_TIME,
  }
};

const reducer = (state = initialState, action) => {
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

export default reducer;
