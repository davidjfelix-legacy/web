import React from 'react'
import PropTypes from 'prop-types'
import Hls from 'hls.js'
import keyMirror from 'keymirror'


export const videoStates = keyMirror({
  PLAYING: null,
  PAUSED: null,
  WAITING: null,
})

export const styles = {
  video: {
    backgroundColor:'#222222',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}


class VideoStream extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <video
          ref={(video) => {this.video=video}}
          style={styles.video}
          height={`${Math.round(this.props.scaleWidth * this.props.scale / this.props.aspectRatio)}px`}
          width={`${Math.round(this.props.scaleWidth * this.props.scale)}px`}
          onTimeUpdate={this.props.onTimeUpdate}
          onLoadedMetadata={(event) => {this.props.updateMaxTime(event.target.duration)}}
          >
        </video>
      </div>
    )
  }
  componentDidMount() {
    if(Hls.isSupported()) {
      this.hls = new Hls()
      this.hls.attachMedia(this.video)
      this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log("video and hls.js are now bound together !")
      })
      this.hls.loadSource('https://us-central1-iotv-1e541.cloudfunctions.net/videos/-KlU31hQDsaXUvL4PUM4/index.m3u8')
      this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        console.log("manifest loaded, found " + data.levels.length + " quality level")
      })
      this.hls.on(Hls.Events.FRAG_BUFFERED, (event, data) => {
        console.log("level loaded")
        this.props.onLoaded()
      })
      console.log(this.hls)
    }
    console.log(`Hls is supported: ${Hls.isSupported()}`)
    if (this.props.performanceState.videosState === videoStates.PLAYING) {
      this.video.play()
    }
  }

  componentDidUpdate() {
    switch (this.props.performanceState.videosState) {
      case videoStates.PLAYING:
        console.log('Attempting to play')
        this.video.play()
        break
      case videoStates.PAUSED:
        this.video.pause()
        break
      default:
        break
    }
  }
}

VideoStream.defaultProps = {
    aspectRatio: 16/9,
    scale: 1.0,
    scaleWidth: 1920
  }

VideoStream.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  updateMaxTime: PropTypes.func.isRequired,
}

export default VideoStream
