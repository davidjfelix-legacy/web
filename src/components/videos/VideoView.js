import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps, withState} from 'recompose'

import {updateVideo, VideoTypes} from '../../actions/videos'
import EditableTextField from '../EditableTextField'
import {withDatabaseSubscribe} from '../hocs'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withState('edit', 'updateEdit', true),
  withProps(({match}) => ({
    videoId: match.params.videoId,
  })),
  withHandlers(
    {
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
      props.dispatch(updateVideo(
        {
          videoId: props.videoId,
          videoSnapshot: snapshot.val()
        }))
    )
  ),
)


const VideoView = (
  {
    edit,
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
      {edit ?
        <EditableTextField
          initialText={_.get(videos, `${videoId}.title`, '')}
          placeholder='Title'
          onChange={() => {
          }}
        /> :
        <p>{_.get(videos, `${videoId}.title`, '')}</p>
      }
      <fieldset>
        <label htmlFor='isStream'>Stream</label>
        <input
          id='isStream'
          name='videoType'
          type='radio'
          checked={_.get(videos, `${videoId}.video_type`, '') === VideoTypes.STREAM}
        />
        <label htmlFor='isUpload'>Upload</label>
        <input
          id='isUpload'
          name='videoType'
          checked={_.get(videos, `${videoId}.video_type`, '') === VideoTypes.UPLOAD}
          type='radio'
        />
      </fieldset>
      <input
        type='submit'
        value='Save'
      />
    </form>
  </div>
)


export default enhance(VideoView)
