import React from 'react';
import App from '../components/App';
import VideoView from '../components/VideoView';
import {Route, IndexRoute} from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={VideoView} />
  </Route>
);
