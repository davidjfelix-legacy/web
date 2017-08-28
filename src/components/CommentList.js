import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'

import {createPerformanceComment, updatePerformanceComments} from '../actions/performanceComments'

import {withDatabaseSubscribe} from './hocs'
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

const mapStateToProps = ({auth, performanceComments}) => ({
  auth,
  performanceComments,
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
      props.dispatch(createPerformanceComment({
        performanceId: props.performanceId,
        authorId: props.auth.user.uid,
        message: props.newComment,
      }))
      props.updateNewComment('')
    }
  }),
  withDatabaseSubscribe(
    'value',
    (props) => (`performance-comments/${props.performanceId}`),
    (props) => (snapshot) => (
      props.dispatch(updatePerformanceComments({
        performanceId: props.performanceId,
        performanceCommentsSnapshot: snapshot.val()
      }))
    )
  ),
)

const CommentList = ({auth, onNewCommentSubmit, onNewCommentChange, newComment, performanceComments, performanceId}) => (
  <div style={styles.commentList}>
    {(performanceId in performanceComments && performanceComments[performanceId] !== null) ?
      Object.keys(performanceComments[performanceId]).map((commentId) => (
        <Comment key={commentId} commentId={commentId}/>
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