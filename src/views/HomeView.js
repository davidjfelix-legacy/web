import React, { Component } from 'react';

import MenuLayout from '../components/MenuLayout';
import VideoPreviewsList from '../containers/VideoPreviewsList';


class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          videoLinkURL: "/v/1",
          videoThumbnailURL: "https://placekitten.com/g/400/225",
          videoTitle: "A video hello",
          videoUser: "hellouser",
          videoUserLinkURL: "/u/1",
        },
        {
          videoLinkURL: "v/1",
          videoThumbnailURL: "https://placekitten.com/g/400/225",
          videoTitle: "A video world",
          videoUser: "worlduser",
          videoUserLinkURL: "/u/1",
        }
      ]
    };
  }

  render() {
    return (
      <MenuLayout>
        <div>
          <VideoPreviewsList videoPreviews={this.state.videos} />
        </div>
      </MenuLayout>
    );
  }
}

export default HomeView;
