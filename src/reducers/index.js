import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

import asyncCreate from './asyncCreate'
import auth from './auth'
import comments from './comments'
import emojis from './emojis'
import groups from './groups'
import performanceComments from './performanceComments'
import roles from './roles'
import users from './users'
import userVideos from './userVideos'
import videos from './videos'
import videoStreamsContainer from './videoStreams'


export const rootReducer = combineReducers(
  {
    asyncCreate,
    auth,
    comments,
    emojis,
    groups,
    performanceComments,
    roles,
    routing: routerReducer,
    users,
    userVideos,
    videos,
    videoStreamsContainer,
  }
)
