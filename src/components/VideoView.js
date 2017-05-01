import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateVideo } from '../actions/videos'
import database from '../database'

import VideoAddOns from '../components/VideoAddOns'
import VideoStreams from '../components/VideoStreams'


const mapStateToProps = ({videos}) => ({
  videos
})

class VideoView extends Component {
  componentDidMount() {
    this.firebaseListener = database.ref(`videos/${this.props.params.videoId}`).on("value", (snapshot) => (
      this.props.dispatch(updateVideo({
        videoId: this.props.params.videoId,
        videoSnapshot: snapshot.val()
      }))
    ))
  }

  render() {
    return (
      <div>
        <VideoStreams />
        <VideoAddOns />
      </div>
      )
    }
}

export default connect(mapStateToProps)(VideoView)
