import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, withState } from 'recompose'

import { updateVideoComments, createVideoComment } from '../actions/videoComments'

import { withDatabaseSubscribe } from './hocs'
import Comment from './Comment'

const styles = {
  commentList: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  newComment: {
    display: 'flex',
    flexDirection: 'row',
  },
  textArea: {
    resize: 'none',
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
  withDatabaseSubscribe(
    'value',
    (props) => (`video-comments/${props.videoId}`),
    (props) => (snapshot) => (
      props.dispatch(updateVideoComments({
        videoId: props.videoId,
        videoCommentsSnapshot: snapshot.val()
      }))
    )
  ),
)

const CommentList = ({ auth, onNewCommentSubmit, onNewCommentChange, newComment, videoComments, videoId }) => (
  <div style={styles.commentList}>
    {(videoId in videoComments && videoComments[videoId] !== null) ?
      Object.keys(videoComments[videoId]).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      )) :
      ""
    }
    {auth.user !== null ?
      <form style={styles.newComment} onSubmit={onNewCommentSubmit}>
        <textarea
          style={styles.textArea}
          placeholder='Type your comment'
          value={newComment}
          onChange={onNewCommentChange}/>
        <input
          type='submit'
          value='Submit'/>
      </form> :
      ""
    }
  </div>
)

export default enhance(CommentList)