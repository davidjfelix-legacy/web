import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import '../css/VideoPreview.css';


const VideoPreview = ({
  dispatch,
  videoLinkURL,
  videoThumbnailURL,
  videoTitle,
  videoUser,
  videoUserLinkURL,
}) => (
  <div onClick={() => dispatch(push(videoLinkURL))}  className="VideoPreview">
    <img src={videoThumbnailURL} className="VideoPreview__Image"/>
    <h3 className="VideoPreview__Title">{videoTitle}</h3>
    <Link to={videoUserLinkURL} className="VideoPreview__User">{videoUser}</Link>
  </div>
);

VideoPreview.propTypes = {
  dispatch: PropTypes.func.isRequired,
  videoLinkURL: PropTypes.string.isRequired,
  videoThumbnailURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  videoUser: PropTypes.string.isRequired,
  videoUserLinkURL: PropTypes.string.isRequired,
}

export default connect()(VideoPreview);
