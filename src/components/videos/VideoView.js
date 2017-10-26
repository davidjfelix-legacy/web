import * as _ from 'lodash'
import {ChoiceGroup, DefaultButton, TextField} from 'office-ui-fabric-react'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps, withState} from 'recompose'

import {refreshVideo, updateVideo, VideoOwnerTypes, VideoStates, VideoTypes} from '../../actions/videos'
import {addVideoUpload} from '../../actions/videoUploader'
import Groupname from '../Groupname'
import {withDatabaseSubscribe, withLoading} from '../hocs'
import LoadingView from '../LoadingView'
import Username from '../Username'


const mapStateToProps = ({auth, videos}) => ({
  auth,
  videos,
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    videoId: match.params.videoId,
  })),
  withState('file', 'updateFile', ''),
  withHandlers(
    {
      onFileChange: ({updateFile}) => event => {
        updateFile(event.target.value)
      },
      onTitleChange: ({dispatch, videoId}) => newTitle => {
        dispatch(updateVideo(
          {
            videoId: videoId,
            videoDelta: {
              title: newTitle
            }
          }
        ))
      },
      onUpload: ({auth, dispatch, file}) => (event) => {
        event.preventDefault()
        dispatch(addVideoUpload(
          {
            userId: auth.user.uid,
            uploadFile: event.target.elements.file.files[0]
          }
        ))
      },
      onVideoTypeChange: ({dispatch, videoId}) => (_, newVideoType) => {
        dispatch(updateVideo(
          {
            videoId: videoId,
            videoDelta: {
              video_type: newVideoType.key
            }
          }
        ))
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
    file,
    onFileChange,
    onTitleChange,
    onUpload,
    onVideoTypeChange,
    videos,
    videoId
  }) => (
  <div>
    {_.get(videos, `${videoId}.video_owner_type`, '') === VideoOwnerTypes.USER_VIDEO ?
      <Username userId={_.get(videos, `${videoId}.owner_id`, '')}/> :
      <Groupname groupId={_.get(videos, `${videoId}.owner_id`, '')}/>
    }
    <TextField
      label='Video Title'
      value={_.get(videos, `${videoId}.title`, '')}
      onChanged={onTitleChange}
    />
    <ChoiceGroup
      label='Video Type'
      selectedKey={_.get(videos, `${videoId}.video_type`, '')}
      options={[
        {
          key: 'STREAM',
          text: 'Live Stream',
          iconProps: {iconName: 'video'},
        },
        {
          key: 'UPLOAD',
          text: 'Upload Video',
          iconProps: {iconName: 'Upload'},
        }
      ]}
      required={true}
      onChange={onVideoTypeChange}
    />
    {(
      (_.get(videos, `${videoId}.video_type`, '') === VideoTypes.UPLOAD) &&
      (_.get(videos, `${videoId}.video_state`, '') === VideoStates.UNINITIALIZED)
    ) ?
      <div>
        <form
          id='upload-video'
          onSubmit={onUpload}
        />
        <input
          form='upload-video'
          id='file'
          type='file'
          value={file}
          onChange={onFileChange}
        />
        <DefaultButton
          primary={true}
          type='submit'
          value='submit'
          form='upload-video'
          text='Upload'
        />
      </div> :
      ''
    }
  </div>
)


export default enhance(VideoView)
