import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {compose} from 'recompose'

import {updateVideo} from '../actions/videos'
import '../css/VideoPreview.css'
import {withDatabaseSubscribe, withLoading, withNotFound} from './hocs'
import LoadingView from './LoadingView'
import NotFoundView from './NotFoundView'
import Username from './Username'


const mapStateToProps = ({videos}) => ({
  videos
})

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
    LoadingView
  ),
  withNotFound(
    (props) => (props.videoId in props.videos) && props.videos[props.videoId] === null,
    NotFoundView
  ),
)

const VideoPreview = ({videoId, videos}) => (
  <div className='VideoPreview'>
    <Link to={`/videos/${videoId}`}>
      <img src={videos[videoId]['thumbnail_url']} alt={'Untitled Preview'} className='VideoPreview__Image'/>
    </Link>
    <h3 className='VideoPreview__Title'>{videos[videoId]['title']}</h3>
    <Link to={`/users/${videos[videoId]['owner_id']}`} className='VideoPreview__User'>
      <Username userId={videos[videoId]['owner_id']}/>
    </Link>
  </div>
)

export default enhance(VideoPreview)
