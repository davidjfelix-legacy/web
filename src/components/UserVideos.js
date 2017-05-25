import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, getContext } from 'recompose'

import { updateUserVideos } from '../actions/userVideos'
import UserNav from './UserNav'
import VideoPreviewsList from './VideoPreviewsList'

import { withDatabaseSubscribe } from './hocs'

const mapStateToProps = ({userVideos, videos}) => ({
  userVideos,
  videos
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

const UserVideos = ({baseUrl, userId, userVideos, videos}) => (
  <div>
    <UserNav baseUrl={baseUrl} active="Videos" />
    <VideoPreviewsList
      videoPreviews={
        Object.keys(videos)
          .filter(key => Object.keys(userVideos[userId]).includes(key))
          .reduce((obj, key) => {
            obj[key] = videos[key]
            return obj
          }, {})
      }/>
  </div>
)

export default enhanceSubs(UserVideos)
