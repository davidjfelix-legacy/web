import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { updateComment } from '../actions/comments'

import { withDatabaseSubscribe } from './hocs'
import Username from './Username'

const styles = {
  comment: {
    display: 'block',
  },
  icon: {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    backgroundColor: '#dedede',
    border: '1px solid #212121',
  },
  username: {
    margin: '0 1em 0 .5em',
  }
}

const mapStateToProps = ({comments}) => ({
  comments
})

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`comments/${props.commentId}`),
    (props) => (snapshot) => (
      props.dispatch(updateComment({
        commentId: props.commentId,
        commentSnapshot: snapshot.val()
      }))
    )
  ),
)

const Comment = ({ commentId, comments }) => (
  <div>
    {(commentId in comments && comments[commentId] !== null) ?
      <div style={styles.comment}>
        <div style={styles.icon} />
        <div style={styles.username}>
          <Username userId={comments[commentId]['author_id']} />
        </div>
        <span>{comments[commentId]['message']}</span>
      </div> :
      ""
    }
  </div>
)

export default enhance(Comment)