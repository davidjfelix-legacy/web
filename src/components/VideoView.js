import React from 'react';
import { connect } from 'react-redux';

import VideoAddOns from './VideoAddOns';
import VideoContainer from './VideoContainer';

import '../css/VideoView.css';

const VideoView = () => (
  <div className='VideoView'>
    <VideoContainer />
    <VideoAddOns />
  </div>
);

export default connect()(VideoView);
