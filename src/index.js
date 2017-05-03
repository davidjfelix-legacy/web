import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App'
import FacebookLoginCallback from './containers/FacebookLoginCallback'
import GroupView from './views/GroupView'
import HomeView from './components/HomeView'
import LoginView from './components/LoginView'
import UserView from './components/UserView'
import UserFollowers from './components/UserFollowers'
import UserFollowing from './components/UserFollowing'
import UserOrganizations from './components/UserOrganizations'
import UserOverview from './components/UserOverview'
import UserVideos from './components/UserVideos'
import VideoView from './components/VideoView'

import configureStore from './store'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeView} />
        <Route path="a/login" component={LoginView} />
        <Route path="auth/login" component={LoginView} />
        <Route path="a/facebook" component={FacebookLoginCallback} />
        <Route path="g/:groupName" component={GroupView} />
        <Route path="groups/:groupName" component={GroupView} />
        <Route path="u/:userId" component={UserView} >
          <IndexRoute component={UserOverview} />
          <Route path="videos" component={UserVideos} />
          <Route path="organizations" component={UserOrganizations} />
          <Route path="following" component={UserFollowing} />
          <Route path="followers" component={UserFollowers} />
        </Route>
        <Route path="users/:userId" component={UserView} />
        <Route path="v/:videoId" component={VideoView} />
        <Route path="videos/:videoId"  component={VideoView} />
        <Route path="*" component={HomeView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
