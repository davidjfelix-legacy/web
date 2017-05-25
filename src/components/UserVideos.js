import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, getContext } from 'recompose'

import { updateUserVideos } from '../actions/userVideos'
import UserNav from './UserNav'
import VideoPreviewsList from './VideoPreviewsList'

import { withDatabaseSubscribe } from './hocs'

const mapStateToProps = ({userVideos}) => ({
  userVideos,
})

const enhanceSubs = compose(
  connect(mapStateToProps),
  getContext({
    baseUrl: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }),
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

const UserVideos = ({baseUrl, userId, userVideos}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Videos" />
    <VideoPreviewsList videoIds={userVideos[userId] ? Object.keys(userVideos[userId]) : [] } />
  </div>
)

export default enhanceSubs(UserVideos)
