import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import GroupView from './views/GroupView';
import HomeView from './views/HomeView';
import UserView from './views/UserView';
import VideoView from './views/VideoView';

import { configure as configureStore } from './state/store';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="g/:groupName" component={GroupView} />
        <Route path="groups/:groupName" component={GroupView} />
        <Route path="u/:userName" component={UserView} />
        <Route path="users/:userName" component={UserView} />
        <Route path="v/:videoId" component={VideoView} />
        <Route path="videos/:videoId"  component={VideoView} />
        <IndexRoute component={HomeView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
