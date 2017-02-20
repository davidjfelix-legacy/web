import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  ADD_VOTE: null,
});

const initialState = {
  question: "What is your favorite color?",
  values: [
    {
      time: 1,
      vote: 'RED'
    },
    {
      time: 2,
      vote: 'BLUE'
    },
    {
      time: 5,
      vote: 'BLUE'
    },
    {
      time: 6,
      vote: 'BLUE'
    },
    {
      time: 10,
      vote: 'GREEN'
    },
]
};

export function addVote(vote) {
  return {
    vote,
    type: actionTypes.ADD_VOTE,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_VOTE:
      return [
          ...state,
          action.vote
      ];
    default:
      return state;
  }
}
