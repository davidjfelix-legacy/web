import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle, withHandlers, withState } from 'recompose'

import database from '../database'
import { updateVideoComments, createVideoComment } from '../actions/videoComments'

import Comment from './Comment'

const styles = {
  commentList: {
  },
}

const mapStateToProps = ({auth, videoComments}) => ({
  auth,
  videoComments,
})

const enhance = compose(
  connect(mapStateToProps),
  withState('newComment', 'updateNewComment', ''),
  withHandlers({
    onNewCommentChange: props => event => {
      props.updateNewComment(event.target.value)
    },
    onNewCommentSubmit: props => event => {
      event.preventDefault()
      props.dispatch(createVideoComment({
        videoId: props.videoId,
        authorId: props.auth.user.uid,
        message: props.newComment,
      }))
      props.updateNewComment('')
    }
  }),
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

const CommentList = ({ onNewCommentSubmit, onNewCommentChange, newComment, videoComments, videoId }) => (
  <div style={styles.commentList}>
    {(videoId in videoComments && videoComments[videoId] !== null) ?
      Object.keys(videoComments[videoId]).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      )) :
      ""
    }
    <form id='newComment' onSubmit={onNewCommentSubmit} />
    <textarea
      form='newComment'
      id='message'
      name='message'
      placeholder='Type your comment'
      value={newComment}
      onChange={onNewCommentChange}/>
    <input
      form='newComment'
      type='submit'
      value='Submit'/>
  </div>
)

export default enhance(CommentList)