import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link } from 'react-router'

import '../css/VideoPreview.css'


const VideoPreview = ({
  dispatch,
  videoLinkURL,
  videoThumbnailURL,
  videoTitle,
  videoUser,
  videoUserLinkURL,
}) => (
  <div onClick={() => dispatch(push(videoLinkURL))}  className="VideoPreview">
    <img src={videoThumbnailURL} alt={`${videoTitle} preview thumbnail`} className="VideoPreview__Image"/>
    <h3 className="VideoPreview__Title">{videoTitle}</h3>
    <Link to={videoUserLinkURL} className="VideoPreview__User">{videoUser}</Link>
  </div>
);

export default connect()(VideoPreview);
