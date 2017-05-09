import keyMirror from 'keymirror'

import database from '../database'

export const actionTypes = keyMirror({
  CREATE_VIDEO_COMMENT: null,
  UPDATE_VIDEO_COMMENTS: null,
})

export const createVideoComment = ({ videoId, authorId, message }) => {
  const commentList = database.ref('comments')
  const videoCommentsRef = database.ref(`video-comments/${videoId}`)
  const commentRef = commentList.push()
  commentRef.set({
    video_id: videoId,
    author_id:authorId,
    message: message
  })
  videoCommentsRef.update({
    [commentRef.key]: true
  })

  return {
    type: actionTypes.CREATE_VIDEO_COMMENT,
    videoId,
    authorId,
    message
  }
}

export const updateVideoComments = ({ videoId, videoCommentsSnapshot }) => ({
  type: actionTypes.UPDATE_VIDEO_COMMENTS,
  videoId,
  videoCommentsSnapshot,
})