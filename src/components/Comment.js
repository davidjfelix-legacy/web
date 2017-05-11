import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import database from '../database'
import { updateComment } from '../actions/comments'

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
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`comments/${this.props.commentId}`)
      this.onFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateComment({
            commentId: this.props.commentId,
            commentSnapshot: snapshot.val()
          }))
        )
      )
    },
    componentWillUnmount() {
      this.databaseRef.off('value', this.props.onFirebaseValue)
    },
  }),
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