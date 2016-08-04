import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import VideoContainer from './components/VideoContainer';

class App extends Component {
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

export default App;

