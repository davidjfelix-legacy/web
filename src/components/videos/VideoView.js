import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import {refreshVideo, updateVideo} from '../../actions/videos'
import EditableTextField from '../EditableTextField'
import {withDatabaseSubscribe, withLoading} from '../hocs'
import LoadingView from '../LoadingView'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    videoId: match.params.videoId,
  })),
  withHandlers(
    {
      onTitleChange: ({dispatch, videoId}) => event => {
        dispatch(updateVideo(
          {
            videoId: videoId,
            videoDelta: {
              title: event.target.value
            }
          }
        ))
      },
      onVideoSave: props => event => {
        event.preventDefault()
      },
      toggleEdit: props => event => {
        props.updateEdit(!props.edit)
      }
    }),
  withDatabaseSubscribe(
    'value',
    (props) => (`videos/${props.videoId}`),
    (props) => (snapshot) => (
      props.dispatch(refreshVideo(
        {
          videoId: props.videoId,
          videoSnapshot: snapshot.val()
        }))
    )
  ),
  withLoading(
    ({videos, videoId}) => (!_.has(videos, videoId)),
    LoadingView
  ),
)


const VideoView = (
  {
    onTitleChange,
    onVideoSave,
    title,
    toggleEdit,
    videos,
    videoId
  }) => (
  <div>
    {JSON.stringify(_.get(videos, videoId, {}))}
    <input type='button' onClick={toggleEdit} value='Edit'/>
    <form onSubmit={onVideoSave}>
      <EditableTextField
        initialText={_.get(videos, `${videoId}.title`, '')}
        placeholder='Title'
        onChange={onTitleChange}
      />
      <label htmlFor='isStream'>Stream</label>
      <input
        id='isStream'
        name='videoType'
        type='radio'
      />
      <label htmlFor='isUpload'>Upload</label>
      <input
        id='isUpload'
        name='videoType'
        type='radio'
      />
      <input
        type='submit'
        value='Save'
      />
    </form>
  </div>
)


export default enhance(VideoView)
