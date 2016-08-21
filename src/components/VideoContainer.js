import React, { Component, PropTypes } from 'react';

import '../css/VideoContainer.css';


class VideoContainer extends Component {
  render() {
    return (
      <div className="VideoContainer">
        <video width={this.props.videoWidth.toString()} controls>
          {this.props.videoSources.map((videoSource, index) => (
            <source src={videoSource} key={index} />
          ))}
        </video>
      </div>
    );
  }
}

VideoContainer.propTypes = {
  videoWidth: PropTypes.number.isRequired,
  videoSources: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
}

export default VideoContainer;

