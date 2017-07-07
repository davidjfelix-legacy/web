import React from 'react'

const style = {
  playButton: {},
  progressBar: {},
  videoControls: {
    display: 'flex',
  },
  volumeControls: {},
}

const VideoControls = ({onPlay, progressBarValue, progressBarMax}) => (
  <div style={style.videoControls} >
    <div
      onClick={onPlay}
      style={style.playButton} >play</div>
    <div style={style.volumeControls} >volume</div>
    <progress max={progressBarMax} style={style.progressBar} value={progressBarValue} />
  </div>
)

export default VideoControls
