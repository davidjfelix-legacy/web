import React from 'react'
import { connect } from 'react-redux'
import { compose, getContext } from 'recompose'
import { Link } from 'react-router'

import { updateUserVideos } from '../actions/userVideos'
import { context } from './UserView'
import UserNav, { navLinks } from './UserNav'
import VideoPreviewsList from './VideoPreviewsList'

import { withDatabaseSubscribe } from './hocs'

const mapStateToProps = ({userVideos}) => ({
  userVideos,
})

const enhanceSubs = compose(
  connect(mapStateToProps),
  getContext(context),
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
    <UserNav baseUrl={baseUrl} active={navLinks.videos} />
    {isEditable?
      <Link to='/videos/new'>New</Link> : ''
    }
    <VideoPreviewsList videoIds={userVideos[userId] ? Object.keys(userVideos[userId]) : [] } />
  </div>
)

export default enhanceSubs(UserVideos)
