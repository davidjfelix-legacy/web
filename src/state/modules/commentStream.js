import keyMirror from 'keymirror';
import { actionTypes as videoContainerActionTypes } from './videoContainer';

export const actionTypes = keyMirror({
  ADD_COMMENT: null,
});

const initialState = {
  comments: [],
  events: [{
    type: 'COMMENT_AT',
    actionTime: 5,
    comment: 'This is a comment'
  },
  {
    type: 'COMMENT_AT',
    actionTime: 10,
    comment: 'This is too'
  }],
}

const triggerEvents = ({comments, events}, currentTime) => {
  const eventsToTrigger = events.filter((event) => event.actionTime <= currentTime);
  const newEvents = events.filter((event) => event.actionTime > currentTime);
  const newComments = eventsToTrigger.map((event) => event.comment);
  return {
    comments: [...comments, ...newComments],
    events: [...newEvents],
  };
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
          ...state.comments,
          action.comment
        ]
      };
    case videoContainerActionTypes.UPDATE_TIME:
      return triggerEvents(state, action.currentTime);
    default:
      return state;
  }
}
