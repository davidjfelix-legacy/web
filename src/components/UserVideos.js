import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {compose} from 'recompose'

import {updateUserVideos} from '../actions/userVideos'
import {withDatabaseSubscribe} from './hocs'
import VideoPreviewsList from './VideoPreviewsList'

const mapStateToProps = ({userVideos}) => ({
  userVideos,
})

const enhanceSubs = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`user-videos/${props.userId}`),
    (props) => (snapshot) => {
      props.dispatch(updateUserVideos({
        userId: props.userId,
        userVideosSnapshot: snapshot.val(),
      }))
    }
  ),
)

const UserVideos = ({baseUrl, isEditable, userId, userVideos}) => (
  <div>
    {isEditable ?
      <Link to='/videos/new'>New</Link> : ''
    }
    <VideoPreviewsList videoIds={userVideos[userId] ? Object.keys(userVideos[userId]) : []}/>
  </div>
)

export default enhanceSubs(UserVideos)
