import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/VideoPreview.css';


class VideoPreview extends Component {
  render() {
    return (
      <Link to={this.props.videoLinkURL}  className="VideoPreview">
        <img src={this.props.videoThumbnailURL} className="VideoPreview__Image"/>
        <h3 className="VideoPreview__Title">{this.props.videoTitle}</h3>
        <Link to={this.props.videoUserLinkURL} className="VideoPreview__User">{this.props.videoUser}</Link>
      </Link>
    );
  }
}

VideoPreview.propTypes = {
  videoLinkURL: React.PropTypes.string.isRequired,
  videoThumbnailURL: React.PropTypes.string.isRequired,
  videoTitle: React.PropTypes.string.isRequired,
  videoUser: React.PropTypes.string.isRequired,
  videoUserLinkURL: React.PropTypes.string.isRequired,
}

export default VideoPreview;

