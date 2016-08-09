import React, { Component } from 'react';

import VideoPreview from './VideoPreview';


class VideoPreviewsList extends Component {
  render() {
    return (
      <ul className="VideoPreviewsList">
        {this.props.videoPreviews.map((videoPreview, index) => ()
          <li key={index}>
            <VideoPreview {...videoPreview} />
          <li>
        ))}
      </ul>
    );
  }
}

VideoPreviewsList.propTypes = {
  videosPreviews: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      videoId: React.PropTypes.string.isRequired,
      videoTitle: React.PropTypes.string.isRequired,
      videoDescription: React.PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default VideoPreviewsList;
