import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import {createVideo, VideoOwnerTypes} from '../../actions/videos'
import VideosList from '../videos/VideosList'


const mapStateToProps = ({groups}) => ({
  groups
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    groupId: match.params.groupId
  })),
  withHandlers(
    {
      onNewVideoSubmit: props => event => {
        event.preventDefault()
        props.dispatch(createVideo(
          {
            videoOwnerType: VideoOwnerTypes.GROUP_VIDEO,
            ownerId: props.groupId
          })
        )
      }
    }
  )
)

const GroupVideosView = (
  {
    groups,
    groupId,
    onNewVideoSubmit
  }
) => (
  <div>
    <VideosList
      videoIds={
        Object.keys(_.get(groups, `${groupId}.videos`, {}))
      }
    />
    <form onSubmit={onNewVideoSubmit}>
      <input
        type='submit'
        value='submit'
      />
    </form>
  </div>
)

export default enhance(GroupVideosView)
