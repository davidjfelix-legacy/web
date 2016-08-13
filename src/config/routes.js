import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import GroupView from '../components/GroupView';
import HomeView from '../components/HomeView';
import UserView from '../components/UserView';
import VideoView from '../components/VideoView';


export default (
  <Route path="/" component={App}>
    <Route path="v/:videoId" component={VideoView} />
    <Route path="videos/:videoId"  component={VideoView} />
    <Route path="u/:userName" component={UserView} />
    <Route path="users/:userName" component={UserView} />
    <Route path="g/:groupName" component={GroupView} />
    <Route path="groups/:groupName" component={GroupView} />
    <IndexRoute component={HomeView} />
  </Route>
);
