import React from 'react';
import { connect } from 'react-redux';

import VideoPreview from './VideoPreview';

import styles from '../css/VideoPreviewsList.css';

const VideoPreviewsList = ({videoPreviews}) => (
  <ul className={styles.VideoPreviewsList}>
    {videoPreviews.map((videoPreview, index) => (
      <li className={styles.VideoPreviewsList__Item} key={index}>
        <VideoPreview {...videoPreview} />
      </li>
    ))}
  </ul>
);

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

export default connect()(VideoPreviewsList);