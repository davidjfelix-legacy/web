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

const VideoPreviewsList = ({videoPreviews}) => (
  <ul style={styles.List}>
    {Object.keys(videoPreviews).map((key, index) => (
      <li style={styles.Item} key={key}>
        <VideoPreview 
          videoLinkURL={`/v/${key}`}
          videoThumbnailURL={videoPreviews[key]['thumbnail_url']}
          videoTitle="Untitled" //FIXME: work titles in
          videoUser={videoPreviews[key]['owner_id']} //FIME: translate id to username
          videoUserLinkURL={`/u/${videoPreviews[key]['owner_id']}`}
        />
      </li>
    ))}
  </ul>
)

export default VideoPreviewsList;