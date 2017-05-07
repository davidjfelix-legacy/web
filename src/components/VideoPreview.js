import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { push } from 'react-router-redux'
import { Link } from 'react-router'

import database from '../database'
import { updateUser } from '../actions/users'

import '../css/VideoPreview.css'

const mapStateToProps = ({users}) => ({
  users
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`users/${this.props.videoUser}`)
      this.onFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateUser({
            userId: this.props.videoUser,
            userSnapshot: snapshot.val()
          }))
        )
      )
    },
    componentWillUnMount() {
      this.databaseRef.off('value', this.props.onFirebaseValue)
    },
  }),
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
