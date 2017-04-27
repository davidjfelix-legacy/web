import React from 'react'
import PropTypes from 'prop-types'

import VideoPreview from './VideoPreview'


export const styles = {
  List: {
    listStyle: "none",
    padding: "0px",
    margin: "0px",
  },
  Item: {
    display: "inline-block",
    marginBottom: "0px",
    marginLeft: "10px",
    marginRight: "0px",
    marginTop: "10px",
  },
}

const VideoPreviewsList = ({videoPreviews}) => (
  <ul style={styles.List}>
    {videoPreviews.map((videoPreview, index) => (
      <li style={styles.Item} key={index}>
        <VideoPreview {...videoPreview} />
      </li>
    ))}
  </ul>
);

VideoPreviewsList.propTypes = {
  videoPreviews: PropTypes.arrayOf(
    PropTypes.shape({
      videoLinkURL: PropTypes.string.isRequired,
      videoThumbnailURL: PropTypes.string.isRequired,
      videoTitle: PropTypes.string.isRequired,
      videoUser: PropTypes.string.isRequired,
      videoUserLinkURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default VideoPreviewsList;