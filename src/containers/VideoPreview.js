import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import styles from '../css/VideoPreview.css';


const VideoPreview = ({
  dispatch,
  videoLinkURL,
  videoThumbnailURL,
  videoTitle,
  videoUser,
  videoUserLinkURL,
}) => (
  <div onClick={() => dispatch(push(videoLinkURL))}  className={styles.VideoPreview}>
    <img src={videoThumbnailURL} alt={`${videoTitle} preview thumbnail`} className={styles.VideoPreview__Image}/>
    <h3 className={styles.VideoPreview__Title}>{videoTitle}</h3>
    <Link to={videoUserLinkURL} className={styles.VideoPreview__User}>{videoUser}</Link>
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
