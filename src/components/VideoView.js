import React, { Component } from 'react';
import '../App.css';

import VideoContainer from './VideoContainer';

class VideoView extends Component {
  render() {
    return (
      <div className="App">
        <VideoContainer
          videoWidth={960}
          videoSources={["https://s3.amazonaws.com/buukkittt/bbb_sunflower_1080p_60fps_normal.mp4"]}></VideoContainer>
      </div>
    );
  }
}

export default VideoView;

