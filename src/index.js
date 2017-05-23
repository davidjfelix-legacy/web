import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App'
import AuthenticatedContainer from './components/AuthenticatedContainer'
import GroupView from './views/GroupView'
import HomeView from './components/HomeView'
import LoginView from './components/LoginView'
import MeContainer from './components/MeContainer'
import NotAuthenticatedContainer from './components/NotAuthenticatedContainer'
import RegisterView from './components/RegisterView'
import UserContainer from './components/UserContainer'
import {
  UserFollowers,
  UserFollowing,
  UserOrganizations,
  UserOverview,
  UserPlaylists,
  UserSeries,
  UserShows,
  UserVideos,
} from './components/UserView'
import VideoView from './components/VideoView'

import configureStore from './store'

import './index.css'
import 'normalize.css/normalize.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={HomeView} />
        <Route component={NotAuthenticatedContainer}> 
          <Route path='a/login' component={LoginView} />
          <Route path='auth/login' component={LoginView} />
          <Route path='a/register' component={RegisterView} />
          <Route path='auth/register' component={RegisterView} />
        </Route>
        <Route component={AuthenticatedContainer}>
          <Route path='me' component={MeContainer} >
            <IndexRoute component={UserOverview} />
            <Route path='videos' component={UserVideos} />
            <Route path='organizations' component={UserOrganizations} />
            <Route path='following'  component={UserFollowing} />
            <Route path='followers' component={UserFollowers} />
            <Route path='shows' component={UserShows} />
            <Route path='series' component={UserSeries} />
            <Route path='playlists' component={UserPlaylists} />
          </Route>
        </Route>
        <Route path='g/:groupName' component={GroupView} />
        <Route path='groups/:groupName' component={GroupView} />
        <Route path='u/:userId' component={UserContainer} >
            <IndexRoute component={UserOverview} /> 
            <Route path='videos' component={UserVideos} />
            <Route path='organizations' component={UserOrganizations} />
            <Route path='following'  component={UserFollowing} />
            <Route path='followers' component={UserFollowers} />
            <Route path='shows' component={UserShows} />
            <Route path='series' component={UserSeries} />
            <Route path='playlists' component={UserPlaylists} />
        </Route>
        <Route path='users/:userId' component={UserContainer}>
          <IndexRoute component={UserOverview} />
            <IndexRoute component={UserOverview} />
            <Route path='videos' component={UserVideos} />
            <Route path='organizations' component={UserOrganizations} />
            <Route path='following'  component={UserFollowing} />
            <Route path='followers' component={UserFollowers} />
            <Route path='shows' component={UserShows} />
            <Route path='series' component={UserSeries} />
            <Route path='playlists' component={UserPlaylists} />
        </Route>
        <Route path='v/:videoId' component={VideoView} />
        <Route path='videos/:videoId'  component={VideoView} />
        <Route path='*' component={HomeView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
