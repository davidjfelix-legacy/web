import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, defaultProps } from 'recompose'

import { updateTime } from '../reducers/videoStreams'

export const styles = {
  video: {
    backgroundColor:'#222222',
    padding: '1em',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}

const enhance = compose(
  connect(),
  defaultProps({
    aspectRatio: 16/9,
    scale: 1.0,
    scaleWidth: 1080
  })
)

const VideoStream = ({ video, dispatch, aspectRatio, scale, scaleWidth }) => (
  <div style={{}}>
    <video
      style={styles.video}
      controls
      height={`${Math.round(scaleWidth * scale / aspectRatio)}px`}
      width={`${Math.round(scaleWidth * scale)}px`}
      onTimeUpdate={(event) => dispatch(updateTime(event.target.currentTime))}
      ><source src={video['url']} />
    </video>
  </div>
)

VideoStream.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default enhance(VideoStream);
