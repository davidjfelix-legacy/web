import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

import {updateVideo} from '../../actions/videos'
import CommentList from '../CommentList'

import {withDatabaseSubscribe} from '../hocs'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    videoId: match.params.videoId,
  })),
  withDatabaseSubscribe(
    'value',
    (props) => (`videos/${props.videoId}`),
    (props) => (snapshot) => (
      props.dispatch(updateVideo(
        {
          videoId: props.videoId,
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


const VideoView = ({videos, videoId}) => (
  <div style={styles.videoContainer}>
    {JSON.stringify(_.get(videos, videoId, {}))}
    <CommentList videoId={videoId}/>
  </div>
)


export default enhance(VideoView)
