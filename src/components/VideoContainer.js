import React, { Component, PropTypes } from 'react';

import CommentStream from './CommentStream';

import './VideoContainer.css';


class VideoContainer extends Component {
  render() {
    return (
      <div className="VideoContainer">
        <video width={this.props.videoWidth.toString()} controls>
          {this.props.videoSources.map((videoSource, index) => (
            <source src={videoSource} key={index} />
          ))}
        </video>
        <CommentStream events={this.props.addOns[0].events}/>
      </div>
    );
  }
}

VideoContainer.propTypes = {
  addOns: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          action: PropTypes.object.isRequired,      // Eventually validate this action
          triggerTime: PropTypes.number.isRequired, // Eventually validate this as a time
        }).isRequired
      ).isRequired,
      data: PropTypes.object.isRequired
    }).isRequired
  ).isRequired,
  videoWidth: PropTypes.number.isRequired,
  videoSources: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
}

export default VideoContainer;

