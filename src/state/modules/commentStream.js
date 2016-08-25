import keyMirror from 'keyMirror';

const actionTypes = keyMirror({
  ADD_COMMENT: null,
});

const initialState = {
  comments: [],
  events: [],
}

export function addComment(comment) {
  return {
    comment,
    type: actionTypes.ADD_COMMENT,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state,
          action.comment
        ]
      };
    default:
      return state;
  }
}
