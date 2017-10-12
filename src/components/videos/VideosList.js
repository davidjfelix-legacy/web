import React from 'react'

import VideoPreviewCard from '../videos/VideoPreviewCard'

const VideosList = ({videoIds}) => (
  <ul>{videoIds.map((videoId) => (
    <li key={videoId}>
      <VideoPreviewCard videoId={videoId}/>
    </li>
  ))
  }</ul>
)

export default VideosList
