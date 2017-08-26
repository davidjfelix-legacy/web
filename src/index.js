import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import App from './components/App'
import AuthenticatedContainer from './components/AuthenticatedContainer'
import GroupView from './views/GroupView'
import HomeView from './components/HomeView'
import LoginView from './components/LoginView'
import MeContainer from './components/MeContainer'
import NewVideoView from './components/NewVideoView'
import NotAuthenticatedContainer from './components/NotAuthenticatedContainer'
import RegisterView from './components/RegisterView'
import UserContainer from './components/UserContainer'
import UserFollowers from './components/UserFollowers'
import UserFollowing from './components/UserFollowing'
import UserOrganizations from './components/UserOrganizations'
import UserOverview from './components/UserOverview'
import UserPlaylists from './components/UserPlaylists'
import UserSeries from './components/UserSeries'
import UserShows from './components/UserShows'
import UserVideos from './components/UserVideos'
import VideoView from './components/VideoView'

import configureStore, {browserHistory} from './store'

import './index.css'
import 'normalize.css/normalize.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomeView}/>
        <Route component={NotAuthenticatedContainer}>
          <Route path='auth/login' component={LoginView}/>
          <Route path='auth/register' component={RegisterView}/>
        </Route>
        <Route component={AuthenticatedContainer}>
          <Route path='me' component={MeContainer}>
            <IndexRoute component={UserOverview}/>
            <Route path='videos' component={UserVideos}/>
            <Route path='organizations' component={UserOrganizations}/>
            <Route path='following' component={UserFollowing}/>
            <Route path='followers' component={UserFollowers}/>
            <Route path='shows' component={UserShows}/>
            <Route path='series' component={UserSeries}/>
            <Route path='playlists' component={UserPlaylists}/>
          </Route>
          <Route path='videos/new' component={NewVideoView}/>
        </Route>
        <Route path='groups/:groupName' component={GroupView}/>
        <Route path='users/:userId' component={UserContainer}>
          <IndexRoute component={UserOverview}/>
          <Route path='videos' component={UserVideos}/>
          <Route path='organizations' component={UserOrganizations}/>
          <Route path='following' component={UserFollowing}/>
          <Route path='followers' component={UserFollowers}/>
          <Route path='shows' component={UserShows}/>
          <Route path='series' component={UserSeries}/>
          <Route path='playlists' component={UserPlaylists}/>
        </Route>
        <Route path='videos/:videoId' component={VideoView}/>
        <Route path='*' component={HomeView}/>
      </Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
