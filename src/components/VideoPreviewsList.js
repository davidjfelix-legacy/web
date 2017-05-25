import React from 'react'

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

const VideoPreviewsList = ({videoIds}) => (
  <ul style={styles.List}>
    {videoIds.map((id) => (
      <li style={styles.Item} key={id}>
        <VideoPreview videoId={id} />
      </li>
    ))}
  </ul>
)

export default VideoPreviewsList;