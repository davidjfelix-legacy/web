import React, { Component } from 'react';

import VideoPreview from './VideoPreview';

import '../css/VideoPreviewsList.css';

class VideoPreviewsList extends Component {
  render() {
    return (
      <ul className="VideoPreviewsList">
        {this.props.videoPreviews.map((videoPreview, index) => (
          <li className="VideoPreviewsList__Item" key={index}>
            <VideoPreview {...videoPreview} />
          </li>
        ))}
      </ul>
    );
  }
}

VideoPreviewsList.propTypes = {
  videoPreviews: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      videoLinkURL: React.PropTypes.string.isRequired,
      videoThumbnailURL: React.PropTypes.string.isRequired,
      videoTitle: React.PropTypes.string.isRequired,
      videoUser: React.PropTypes.string.isRequired,
      videoUserLinkURL: React.PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default VideoPreviewsList;
