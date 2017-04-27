import React from 'react'
import { connect } from 'react-redux'

import VideoAddOns from '../components/VideoAddOns'
import VideoStreams from '../components/VideoStreams'


const VideoView = () => (
  <div>
    <VideoStreams />
    <VideoAddOns />
  </div>
);

export default connect()(VideoView)
