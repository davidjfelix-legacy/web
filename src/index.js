import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App'
import GroupView from './views/GroupView'
import HomeView from './components/HomeView'
import LoginView from './components/LoginView'
import RegisterView from './components/RegisterView'
import UserView from './components/UserView'
import VideoView from './components/VideoView'

import configureStore from './store'

import './index.css'
import 'normalize.css/normalize.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeView} />
        <Route path="a/login" component={LoginView} />
        <Route path="auth/login" component={LoginView} />
        <Route path="a/register" component={RegisterView} />
        <Route path="auth/register" component={RegisterView} />
        <Route path="g/:groupName" component={GroupView} />
        <Route path="groups/:groupName" component={GroupView} />
        <Route path="u/:userId" component={UserView} />
        <Route path="users/:userId" component={UserView} />
        <Route path="v/:videoId" component={VideoView} />
        <Route path="videos/:videoId"  component={VideoView} />
        <Route path="*" component={HomeView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
