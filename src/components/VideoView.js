import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateVideo } from '../actions/videos'
import database from '../database'

import VideoAddOns from '../components/VideoAddOns'
import VideoStreams from '../components/VideoStreams'


const mapStateToProps = ({videos}) => ({
  videos
})

let onFirebaseValue = null

class VideoView extends Component {
  componentWillMount() {
    this.databaseRef = database.ref(`videos/${this.props.params.videoId}`)
    onFirebaseValue = this.databaseRef.on('value', (snapshot) => (
      this.props.dispatch(updateVideo({
        videoId: this.props.params.videoId,
        videoSnapshot: snapshot.val()
      }))
    ))
  }

  componentWillUnmount() {
    this.databaseRef.off('value', onFirebaseValue)
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
