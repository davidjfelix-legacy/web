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
        {Object.keys(this.props.videos)
          .filter((key) => (key === this.props.params.videoId))
          .map((key) => (
            <VideoStreams key={key} videos={[this.props.videos[key]]}/>
          ))
        }
        <VideoAddOns />
      </div>
      )
    }
}

export default connect(mapStateToProps)(VideoView)
