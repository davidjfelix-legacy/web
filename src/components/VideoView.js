import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle, withState } from 'recompose'

import { updateVideo } from '../actions/videos'
import database from '../database'

import VideoAddOns from '../components/VideoAddOns'
import VideoStream from '../components/VideoStream'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withState('databaseRef', 'updateDatabaseRef', null),
  withState('onFirebaseValue', 'updateOnFirebaseValue', null),
  lifecycle({
    componentWillMount() {
      let databaseRef = database.ref(`videos/${this.props.params.videoId}`)
      this.props.updateDatabaseRef(databaseRef)
      this.props.updateOnFirebaseValue(databaseRef.on('value', (snapshot) => (
        this.props.dispatch(updateVideo({
          videoId: this.props.params.videoId,
          videoSnapshot: snapshot.val()
        }))
      )))
    },
    componentWillUnmount() {
      this.props.databaseRef.off('value', this.props.onFirebaseValue)
    }
  })
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
