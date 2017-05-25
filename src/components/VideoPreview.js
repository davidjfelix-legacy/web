import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router'

import { updateVideo } from '../actions/videos'
import Username from './Username'

import { withDatabaseSubscribe, withLoading, withNotFound } from './hocs'

import '../css/VideoPreview.css'

const mapStateToProps = ({videos}) => ({
  videos
})

// FIXME
const VideoLoading = () => (
  <span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </span>
)

// FIXME
const VideoNotFound = () => (
  <span>[deleted]</span>
)

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`videos/${props.videoId}`),
    (props) => (snapshot) => (
      props.dispatch(updateVideo({
        videoId: props.videoId,
        videoSnapshot: snapshot.val()
      }))
    )
  ),
  withLoading(
    (props) => !(props.videoId in props.videos),
    VideoLoading
  ),
  withNotFound(
    (props) => (props.videoId in props.videos) && props.videos[props.videoId] === null,
    VideoNotFound
  ),
)

const VideoPreview = ({videoId, videos}) => (
  <div className="VideoPreview">
    <Link to={`/v/${videoId}`}>
      <img src={videos[videoId]['thumbnail_url']} alt={'Untitled Preview'} className="VideoPreview__Image"/>
    </Link>
    <h3 className="VideoPreview__Title">Untitled</h3>
    <Link to={`/u/${videos[videoId]['owner_id']}`} className="VideoPreview__User">
      <Username userId={videos[videoId]['owner_id']} />
    </Link>
  </div>
)

export default enhance(VideoPreview)
