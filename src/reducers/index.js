import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

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
  auth,
  comments,
  emojis,
  groups,
  users,
  userVideos,
  videos,
  videoComments: performanceComments,
  videoStreamsContainer,
  routing: routerReducer,
});
