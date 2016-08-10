import React, { Component } from 'react';

import VideoPreviewsList from './VideoPreviewsList';


class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          videoId: "hello",
          videoTitle: "hello",
          videoDescription: "hello"
        },
        {
          videoId: "world",
          videoTitle: "world",
          videoDescription: "world",
        }
      ]
    };
  }
  
  render() {
    return (
      <div>
        <VideoPreviewsList videoPreviews={this.state.videos} />
      </div>
    );
  }
}

export default HomeView;

