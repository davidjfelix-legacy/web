import React, { Component } from 'react';
import '../App.css';

import Footer from './Footer';
import PageHeader from './PageHeader';
import VideoContainer from './VideoContainer';

class VideoView extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader></PageHeader>
        <VideoContainer
          videoWidth={480}
          videoSources={["https://s3.amazonaws.com/buukkittt/bbb_sunflower_1080p_60fps_normal.mp4"]}></VideoContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default VideoView;

