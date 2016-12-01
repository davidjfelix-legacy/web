import React from 'react';
import { connect } from 'react-redux';

import VideoAddOns from '../components/VideoAddOns';
import VideoStreamsContainer from '../containers/VideoStreamsContainer';

import '../css/VideoView.css';

const VideoView = () => (
  <div className='VideoView'>
    <VideoStreamsContainer />
    <VideoAddOns />
  </div>
);

export default connect()(VideoView);
