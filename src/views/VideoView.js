import React from 'react';
import { connect } from 'react-redux';

import VideoAddOns from '../containers/VideoAddOns';
import VideoStreams from '../containers/VideoStreams';

import styles from '../css/VideoView.css';

const VideoView = () => (
  <div className={styles.VideoView}>
    <VideoStreams />
    <VideoAddOns />
  </div>
);

export default connect()(VideoView);
