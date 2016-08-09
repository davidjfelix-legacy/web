import React, { Component } from 'react';


class VideoPreview extends Component {
  render() {
    return (
      <div className="VideoPreview">
        <h3 className="VideoPreview__Title">{this.props.videoTitle}</h3>
        <img />
        <p className="VideoPreview__Description">{this.props.videoDescription}</p>
      </div>
    );
  }
}

VideoPreview.propTypes = {
  videoId: React.PropTypes.string.isRequired;
  videoTitle: React.PropTypes.string.isRequired;
  videoDescription: React.PropTypes.string.isRequired;
}

export default VideoPreview;

