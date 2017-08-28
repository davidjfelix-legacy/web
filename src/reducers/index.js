import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import asyncCreate from './asyncCreate'
import auth from './auth'
import comments from './comments'
import emojis from './emojis'
import groups from './groups'
import users from './users'
import userVideos from './userVideos'
import videos from './videos'
import performanceComments from './performanceComments'
import videoStreamsContainer from './videoStreams'


export const rootReducer = combineReducers({
  asyncCreate,
  auth,
  comments,
  emojis,
  groups,
  users,
  userVideos,
  videos,
  performanceComments,
  videoStreamsContainer,
  routing: routerReducer,
});
