import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import VideoView from '../components/VideoView';
import HomeView from '../components/HomeView';

export default (
  <Route path="/" component={App}>
    <Route path="v/:videoId" component={VideoView} />
    <Route path="videos/:videoId"  component={VideoView} />
    <IndexRoute component={HomeView} />
  </Route>
);
