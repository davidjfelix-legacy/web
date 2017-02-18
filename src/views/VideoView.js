import React from 'react';
import { connect } from 'react-redux';

import VideoAddOns from '../containers/VideoAddOns';
import VideoStreams from '../containers/VideoStreams';


const VideoView = () => (
  <div>
    <VideoStreams />
    <VideoAddOns />
  </div>
);

export default connect()(VideoView);
