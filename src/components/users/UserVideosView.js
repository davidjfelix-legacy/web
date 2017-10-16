import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import {createVideo, VideoOwnerTypes} from '../../actions/videos'
import VideosList from '../videos/VideosList'


const mapStateToProps = ({users}) => ({
  users,
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    userId: match.params.userId
  })),
  withHandlers(
    {
      onNewVideoSubmit: props => event => {
        event.preventDefault()
        props.dispatch(createVideo(
          {
            videoOwnerType: VideoOwnerTypes.USER_VIDEO,
            ownerId: props.userId
          })
        )
      }
    }
  )
)

const UserVideosView = (
  {
    onNewVideoSubmit,
    users,
    userId,
  }
) => (
  <div>
    <form onSubmit={onNewVideoSubmit}>
      <input
        type='submit'
        value='Create New Video'
      />
    </form>
    <VideosList
      videoIds={
        Object.keys(_.get(users, `${userId}.videos`, {}))
      }
    />
  </div>
)

export default enhance(UserVideosView)
