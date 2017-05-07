import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'

import auth from './auth'
import users from './users'
import videos from './videos'
import videoStreamsContainer from './videoStreams'

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
  auth,
  users,
  videos,
  videoStreamsContainer,
  routing: routerReducer,
});
