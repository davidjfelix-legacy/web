import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateTime } from '../reducers/videoStreams'

export const styles = {
  video: {
    padding: '1em',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}


const VideoStream = ({ video, dispatch }) => (
  <video
    style={styles.video}
    controls
    onTimeUpdate={(event) => dispatch(updateTime(event.target.currentTime))}
    ><source src={video['url']} />
  </video>
)

VideoStream.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(VideoStream);
