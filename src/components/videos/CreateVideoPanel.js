import * as _ from 'lodash'
import {ChoiceGroup, DefaultButton, Label} from 'office-ui-fabric-react'
import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withHandlers, withProps, withState} from 'recompose'

import {refreshVideo, updateVideo, VideoOwnerTypes, VideoStates, VideoTypes} from '../../actions/videos'
import EditableLabel from '../EditableLabel'
import Groupname from '../groups/Groupname'
import Username from '../users/Username'
import {withDatabaseSubscribe, withLoading} from '../hocs'
import LoadingView from '../LoadingView'


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
      onUpload: ({auth, dispatch, file, videoId}) => (event) => {
        event.preventDefault()
        dispatch(addVideoUpload(
          {
            userId: auth.user.uid,
            uploadFile: event.target.elements.file.files[0]
          }
        ))
        //FIXME: validate that a file is picked at some point
        dispatch(updateVideo(
          {
            videoId: videoId,
            videoDelta: {
              video_state: VideoStates.UPLOADING
            }
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

const CreateVideoPanel = (
  {
    file,
    onFileChange,
    onTitleChange,
    onUpload,
    onVideoTypeChange,
    videoId,
    videos,
  }) => (
  <div>
    {_.get(videos, `${videoId}.video_owner_type`, '') === VideoOwnerTypes.USER_VIDEO ?
      <Label>
        {'Username: '}
        <Link to={`/users/${_.get(videos, `${videoId}.owner_id`, '')}`}>
          <Username userId={_.get(videos, `${videoId}.owner_id`, '')}/>
        </Link>
      </Label> :
      <Label>
        {'Groupname: '}
        <Link to={`/users/${_.get(videos, `${videoId}.owner_id`, '')}`}>
          <Groupname groupId={_.get(videos, `${videoId}.owner_id`, '')}/>
        </Link>
      </Label>
    }
    <EditableLabel
      canEdit={false}
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

export default enhance(CreateVideoPanel)
