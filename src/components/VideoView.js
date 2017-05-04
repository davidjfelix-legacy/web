import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateVideo } from '../actions/videos'
import database from '../database'

import VideoAddOns from '../components/VideoAddOns'
import VideoStream from '../components/VideoStream'


const mapStateToProps = ({videos}) => ({
  videos
})

let onFirebaseValue = null

const styles = {
  videoContainer: {
    height: 'calc(100vh - 56px)',
    display: 'flex',
  }
}

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
      <div style={styles.videoContainer}>
        {Object.keys(this.props.videos)
          .filter((key) => (key === this.props.params.videoId))
          .map((key) => (
            <VideoStream key={key} video={this.props.videos[key]}/>
          ))
        }
        <VideoAddOns />
      </div>
      )
    }
}

export default connect(mapStateToProps)(VideoView)
