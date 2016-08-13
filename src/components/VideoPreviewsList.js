import React, { Component } from 'react';
import { Link } from 'react-router';

import VideoPreview from './VideoPreview';

import './VideoPreviewsList.css';

class VideoPreviewsList extends Component {
  render() {
    return (
      <ul className="VideoPreviewsList">
        {this.props.videoPreviews.map((videoPreview, index) => (
          <li className="VideoPreviewsList__Item" key={index}>
            <Link to={"v/1"}>
              <VideoPreview {...videoPreview} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

VideoPreviewsList.propTypes = {
  videoPreviews: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      videoId: React.PropTypes.string.isRequired,
      videoTitle: React.PropTypes.string.isRequired,
      videoDescription: React.PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default VideoPreviewsList;
