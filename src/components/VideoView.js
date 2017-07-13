import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { updateVideo } from '../actions/videos'

import { withDatabaseSubscribe } from './hocs'
import CommentList from './CommentList'
import PerformanceFrame from './PerformanceFrame'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`videos/${props.params.videoId}`),
    (props) => (snapshot) => (
      props.dispatch(updateVideo({
        videoId: props.params.videoId,
        videoSnapshot: snapshot.val()
      }))
    )
  ),
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
      <PerformanceFrame size={{width: 854, height: 480}} layout={{ videoStreams: [{videoId: params.videoId, z_index: 0, scale: 1.0}]}} /> :
      <p>{"404 not found"}</p>
    }
    {videos[params.videoId] !== null ? 
      <CommentList videoId={params.videoId}/> :
      <p>{"duh"}</p>
    }
  </div>
)


export default enhance(VideoView)
