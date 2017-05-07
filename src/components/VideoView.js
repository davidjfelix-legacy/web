import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import { updateVideo } from '../actions/videos'
import database from '../database'

import VideoAddOns from '../components/VideoAddOns'
import VideoStream from '../components/VideoStream'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`videos/${this.props.params.videoId}`)
      this.onFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateVideo({
            videoId: this.props.params.videoId,
            videoSnapshot: snapshot.val()
          }))
        )
      )
    },
    componentWillUnmount() {
      this.databaseRef.off('value', this.props.onFirebaseValue)
    },
  }),
)

const styles = {
  videoContainer: {
    height: 'calc(100vh - 56px)',
    display: 'flex',
  }
}


const VideoView = ({videos, params}) => (
  <div style={styles.videoContainer}>
    {Object.keys(videos)
      .filter((key) => (key === params.videoId))
      .map((key) => (
        <VideoStream key={key} video={videos[key]}/>
      ))
    }
    <VideoAddOns />
  </div>
)


export default enhance(VideoView)
