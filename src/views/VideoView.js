import React from 'react';
import { connect } from 'react-redux';

import VideoAddOns from '../components/VideoAddOns';
import VideoStreams from '../containers/VideoStreams';

import '../css/VideoView.css';

const VideoView = () => (
  <div className='VideoView'>
    <VideoStreams />
    <VideoAddOns />
  </div>
);

export default connect()(VideoView);
