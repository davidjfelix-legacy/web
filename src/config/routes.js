import React from 'react';
import App from '../components/App';
import VideoView from '../components/VideoView';
import {Route, IndexRoute} from 'react-router';

export default (
  <Route path="/" component={App}>
    <Route path="v/:videoId" component={VideoView} />
    <Route path="videos/:videoId"  component={VideoView} />
    <IndexRoute component={VideoView} />
  </Route>
);
