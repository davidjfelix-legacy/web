import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import { updateVideo } from '../actions/videos'
import database from '../database'

import CommentList from './CommentList'
import VideoStream from './VideoStream'


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
    flexWrap: 'wrap',
  }
}


const VideoView = ({videos, params}) => (
  <div style={styles.videoContainer}>
    {(params.videoId in videos && videos[params.videoId] !== null) ?
      <VideoStream video={videos[params.videoId]}/> :
      <p>{"404 not found"}</p>
    }
    {videos[params.videoId] !== null ? 
      <CommentList videoId={params.videoId}/> :
      <p>{"duh"}</p>
    }
  </div>
)


export default enhance(VideoView)
