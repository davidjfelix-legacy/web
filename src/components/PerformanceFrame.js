import React from 'react'

import VideoStream from './VideoStream'


const PerformanceFrame = ({layout}) => (
  <div>
    {layout['videoStreams'].map((videoStream, index) => (
      <VideoStream video={{url: videoStream.url}} key={index} />
    ))}
  </div>
)

export default PerformanceFrame