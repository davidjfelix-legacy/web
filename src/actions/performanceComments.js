import keyMirror from 'keymirror'

import database from '../database'

export const actionTypes = keyMirror({
  CREATE_PERFORMANCE_COMMENT: null,
  UPDATE_PERFORMANCE_COMMENTS: null,
})

export const createPerformanceComment = ({performanceId, authorId, message}) => {
  const commentList = database.ref('comments')
  const performanceCommentsRef = database.ref(`performance-comments/${performanceId}`)
  const commentRef = commentList.push()
  commentRef.set({
    performance_id: performanceId,
    author_id: authorId,
    message: message
  })
  performanceCommentsRef.update({
    [commentRef.key]: true
  })

  return {
    type: actionTypes.CREATE_PERFORMANCE_COMMENT,
    performanceId,
    authorId,
    message
  }
}

export const updatePerformanceComments = ({performanceId, performanceCommentsSnapshot}) => ({
  type: actionTypes.UPDATE_PERFORMANCE_COMMENTS,
  performanceId,
  performanceCommentsSnapshot,
})