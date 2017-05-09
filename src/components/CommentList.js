import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import database from '../database'
import { updateVideoComments } from '../actions/videoComments'

import Comment from './Comment'

const mapStateToProps = ({videoComments}) => ({
  videoComments
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`video-comments/${this.props.videoId}`)
      this.onFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateVideoComments({
            videoId: this.props.videoId,
            videoCommentsSnapshot: snapshot.val()
          }))
        )
      )
    },
    componentWillUnmount() {
      this.databaseRef.off('value', this.props.onFirebaseValue)
    },
  }),
)

const CommentList = ({ videoComments, videoId }) => (
  <div>
    {(videoId in videoComments && videoComments[videoId] !== null) ?
      Object.keys(videoComments[videoId]).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      )) :
      ""
    }
  </div>
)

export default enhance(CommentList)