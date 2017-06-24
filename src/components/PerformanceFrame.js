import React from 'react'
import PropTypes from 'prop-types'
import { compose, withContext, withHandler, withState } from 'recompose'

import VideoStream from './VideoStream'

const context = {
  videosState: PropTypes.object.isRequired
}

const enhance = compose(
  withState('videosState', 'updateVideoState', {
    time: 0,
    videoState: 'PLAYING',
  }),
  withContext(
    context,
    (props) => ({
      videoState: props.videoState
    })
  ),
)

const PerformanceFrame = ({layout, size}) => (
  <div>
    <div style={{...size}}>
      {layout['videoStreams'].map((videoStream, index) => (
        <VideoStream
          video={{url: videoStream.url}}
          style={{position: "absolute", zIndex: videoStream.z_index}}
          scale={videoStream.scale}
          key={videoStream.url} />
      ))}
    </div>
    <div>play</div>
  </div>
)

export default enhance(PerformanceFrame)