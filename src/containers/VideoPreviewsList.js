import React from 'react';

import VideoPreview from './VideoPreview';


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

export default VideoPreviewsList;