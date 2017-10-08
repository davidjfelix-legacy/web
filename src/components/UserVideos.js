import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import {updateUserVideos} from '../actions/userVideos'
import {createVideo, VideoOwnerTypes} from '../actions/videos'
import {withDatabaseSubscribe} from './hocs'
import VideoPreviewsList from './VideoPreviewsList'


const mapStateToProps = ({userVideos}) => ({
  userVideos,
})

const enhanceSubs = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    userId: match.params.userId
  })),
  withHandlers(
    {
      onNewVideoSubmit: props => event => {
        event.preventDefault()
        props.dispatch(createVideo(
          {
            videoOwnerType: VideoOwnerTypes.USER_VIDEO,
            ownerId: props.userId
          })
        )
      }
    }
  ),
  withDatabaseSubscribe(
    'value',
    (props) => (`user-videos/${props.userId}`),
    (props) => (snapshot) => {
      props.dispatch(updateUserVideos(
        {
          userId: props.userId,
          userVideosSnapshot: snapshot.val(),
        }))
    }
  ),
)

const UserVideos = ({baseUrl, isEditable, onNewVideoSubmit, userId, userVideos}) => (
  <div>
    <form onSubmit={onNewVideoSubmit}>
      <input
        type='submit'
        value='submit'
      />
    </form>
    <VideoPreviewsList videoIds={userVideos[userId] ? Object.keys(userVideos[userId]) : []}/>
  </div>
)

export default enhanceSubs(UserVideos)
