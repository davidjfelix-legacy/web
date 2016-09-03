import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../state/modules/videoContainer'

import '../css/VideoContainer.css';

const mapStateToProps = (state) => ({
  width: state.browser.width,
})

const VideoContainer = ({ dispatch, width }) => (
  <div className="VideoContainer">
    <video width={width} controls onTimeUpdate={(event) => dispatch(updateTime(event.target.currentTime))}>
      <source src="https://s3.amazonaws.com/buukkittt/bbb_sunflower_1080p_60fps_normal.mp4" />
    </video>
  </div>
);

VideoContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(VideoContainer);
