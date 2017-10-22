import * as _ from 'lodash'
import {ChoiceGroup, TextField} from 'office-ui-fabric-react'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import {refreshVideo, updateVideo, VideoOwnerTypes} from '../../actions/videos'
import {withDatabaseSubscribe, withLoading} from '../hocs'
import LoadingView from '../LoadingView'
import Username from '../Username'
import Groupname from '../Groupname'


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
    onTitleChange,
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
  </div>
)


export default enhance(VideoView)
