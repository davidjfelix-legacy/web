import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import { responsiveStateReducer } from 'redux-responsive'

import auth from './auth'
import commentStream from './commentStream'
import streamingPoll from './streamingPoll'
import users from './users'
import videos from './videos'
import videoStreamsContainer from './videoStreams'

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
  browser: responsiveStateReducer,
  auth,
  users,
  commentStream,
  streamingPoll,
  videos,
  videoStreamsContainer,
  routing: routerReducer,
});
