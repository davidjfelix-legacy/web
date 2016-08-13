import React, { Component } from 'react';

import VideoPreviewsList from './VideoPreviewsList';


class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          videoLinkURL: "/v/1",
          videoThumbnailURL: "https://placekitten.com/g/400/225",
          videoTitle: "hello",
          videoUser: "hello",
          videoUserLinkURL: "/u/1",
        },
        {
          videoLinkURL: "v/1",
          videoThumbnailURL: "https://placekitten.com/g/400/225",
          videoTitle: "world",
          videoUser: "world",
          videoUserLinkURL: "/u/1",
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

