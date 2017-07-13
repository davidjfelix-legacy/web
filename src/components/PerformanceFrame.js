import React from 'react'
import { compose, withHandlers, withState } from 'recompose'

import VideoStream, { videoStates } from './VideoStream'
import VideoControls from './VideoControls'


const enhance = compose(
  withState('loadedVideos', 'updateLoadedVideos', new Set([])),
  withState(
    'performanceState',
    'updatePerformanceState',
    {
      maxTime: 1, // Arbitrary, nonzero value so the progress bar seems empty before loading
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
    updateTime: props => time => {
      props.updatePerformanceState({
        ...props.performanceState,
        time: time,
      })
    },
    updateMaxTime: props => maxTime => {
      props.updatePerformanceState({
        ...props.performanceState,
        maxTime: maxTime,
      })
    },
  }),
  withHandlers({
    onLoadForVideo: props => videoId => () => {
      console.log(`video ${videoId} notified it loaded.`)
      props.updateLoadedVideos(props.loadedVideos.add(videoId))
      // FIXME: ghetto, doesn't check that the ids are the same
      console.log(props.loadedVideos)
      let unloadedVideoCount = props.layout['videoStreams'].map((_, index) => index).filter(x => !props.loadedVideos.has(x)).length
      console.log(unloadedVideoCount)
    },
  }),
)

const PerformanceFrame = ({layout, size, performanceState, pauseVideos, playVideos, onLoadForVideo, updateTime, updateMaxTime}) => (
  <div>
    <div style={{width: `${size.width}px`, height: `${size.height}px`}}>
      {layout['videoStreams'].map((videoStream, index) => (
        <VideoStream
          videoId={videoStream.videoId}
          style={{position: "absolute", zIndex: videoStream.z_index}}
          scale={videoStream.scale}
          scaleWidth={size.width}
          key={index}
          performanceState={performanceState}
          onLoaded={onLoadForVideo(index)} 
          onTimeUpdate={(event) => {updateTime(event.target.currentTime)}}
          updateMaxTime={updateMaxTime} />
      ))}
    </div>
    <VideoControls
      performanceState={performanceState}
      progressBarValue={performanceState.time}
      progressBarMax={performanceState.maxTime}
      onPlay={playVideos}
      onPause={pauseVideos}
      width={size.width}/>
  </div>
)

export default enhance(PerformanceFrame)