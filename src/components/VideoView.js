import React, { Component } from 'react';

import VideoContainer from './VideoContainer';

import './App.css';


class VideoView extends Component {
  render() {
    return (
      <div className="container">
        <VideoContainer
          videoWidth={960}
          videoSources={["https://s3.amazonaws.com/buukkittt/bbb_sunflower_1080p_60fps_normal.mp4"]}></VideoContainer>
      </div>
    );
  }
}

export default VideoView;

