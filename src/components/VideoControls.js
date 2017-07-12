import React from 'react'

import Icon, { IconTypes } from './Icon'
import { videoStates } from './VideoStream'

const style = {
  playButton: {},
  progressBar: {
    flex: '1 1 auto',
  },
  videoControls: {
    display: 'flex',
  },
  volumeControls: {},
}

const VideoControls = ({onPause, onPlay, performanceState, progressBarValue, progressBarMax, width}) => (
  <div style={{...style.videoControls, width: width}} >
    {performanceState.videosState === videoStates.PLAYING ?
      <div
        onClick={onPause}
        style={style.pauseButton}><Icon icon={IconTypes.PAUSE}></Icon></div> :
      <div
        onClick={onPlay}
        style={style.playButton}><Icon icon={IconTypes.PLAY}></Icon></div>
    }
    <div style={style.volumeControls} >volume</div>
    <progress max={progressBarMax} style={style.progressBar} value={progressBarValue} />
  </div>
)

export default VideoControls
