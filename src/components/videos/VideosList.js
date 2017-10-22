import React from 'react'

import VideoPreviewCard from '../videos/VideoPreviewCard'


const VideosList = ({videoIds}) => (
  <div style={{display: 'flex', flexWrap: 'flex'}}>{videoIds.map((videoId) => (
    <div key={videoId}>
      <VideoPreviewCard videoId={videoId}/>
    </div>
  ))}</div>
)

export default VideosList
