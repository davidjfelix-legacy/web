import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  ADD_COMMENT: null,
});

const initialState = [{
    time: 5,
    comment: 'This is a comment'
  },
  {
    time: 10,
    comment: 'This is too'
}];

export function addComment(comment) {
  return {
    comment,
    type: actionTypes.ADD_COMMENT,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return [
          ...state,
          action.comment
      ];
    default:
      return state;
  }
}
