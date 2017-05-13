import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { push } from 'react-router-redux'
import { Link } from 'react-router'

import { updateUser } from '../actions/users'

import { withDatabaseSubscribe } from './hocs'

import '../css/VideoPreview.css'

const mapStateToProps = ({users}) => ({
  users
})

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.videoUser}`),
    (props) => (snapshot) => (
      props.dispatch(updateUser({
        userId: props.videoUser,
        userSnapshot: snapshot.val()
      }))
    )
  ),
)

const VideoPreview = ({
  dispatch,
  users,
  videoLinkURL,
  videoThumbnailURL,
  videoTitle,
  videoUser,
  videoUserLinkURL,
}) => (
  <div onClick={() => dispatch(push(videoLinkURL))}  className="VideoPreview">
    <img src={videoThumbnailURL} alt={`${videoTitle} preview thumbnail`} className="VideoPreview__Image"/>
    <h3 className="VideoPreview__Title">{videoTitle}</h3>
    {videoUser in users ?
      <Link to={videoUserLinkURL} className="VideoPreview__User">{users[videoUser].username}</Link> :
      <Link to={videoUserLinkURL} className="VideoPreview__User">{videoUser}</Link>}
  </div>
)

export default enhance(VideoPreview)
