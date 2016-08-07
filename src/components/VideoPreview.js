import React, { Component } from 'react';


class VideoPreview extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

VideoPreview.propTypes = {
  videoId: React.PropTypes.string.isRequired;
  videoTitle: React.PropTypes.string.isRequired;
  videoDescription: React.PropTypes.string.isRequired;
}

export default VideoPreview;

