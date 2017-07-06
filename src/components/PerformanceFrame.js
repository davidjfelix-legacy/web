import React from 'react'
import { compose, withHandlers, withReducer, withState } from 'recompose'
import keyMirror from 'keymirror'

import VideoStream from './VideoStream'

export const videoStates = keyMirror({
  PLAYING: null,
  PAUSED: null,
  WAITING: null,
})

const enhance = compose(
  withState('loadedVideos', 'updateLoadedVideos', new Set([])),
  withState(
    'performanceState',
    'updatePerformanceState',
    {
      time: 0,
      videosState: videoStates.WAITING,
    }
  ),
  withHandlers({
    playVideos: props => () => {
      props.updatePerformanceState({
        ...props.performanceState,
        videosState: videoStates.PLAYING,
      })
    },
    pauseVideos: props => () => {
      props.updatePerformanceState({
        ...props.performanceState,
        videosState: videoStates.PAUSED,
      })
    },
  }),
  withHandlers({
    onLoadForVideo: props => videoId => () => {
      console.log(`video ${videoId} notified it loaded.`)
      props.updateLoadedVideos(props.loadedVideos.add(videoId))
      // FIXME: ghetto, doesn't check that the ids are the same
      console.log(props.loadedVideos)
      let baller = props.layout['videoStreams'].map((_, index) => index).filter(x => !props.loadedVideos.has(x)).length
      console.log(baller)
      if (baller === 0) {
        console.log('Dispatching locally')
        props.playVideos()
      }
    },
  }),
)

const PerformanceFrame = ({layout, size, performanceState, onLoadForVideo}) => (
  <div>
    <div style={{width: `${size.width}px`, height: `${size.height}px`}}>
      {layout['videoStreams'].map((videoStream, index) => (
        <VideoStream
          video={{url: videoStream.url}}
          style={{position: "absolute", zIndex: videoStream.z_index}}
          scale={videoStream.scale}
          scaleWidth={size.width}
          key={index}
          performanceState={performanceState}
          onLoaded={onLoadForVideo(index)} />
      ))}
    </div>
    <div>play</div>
  </div>
)

export default enhance(PerformanceFrame)