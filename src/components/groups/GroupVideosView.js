import React from 'react'
import {compose, withHandlers, withProps} from 'recompose'
import {connect} from 'react-redux'
import {createVideo, VideoOwnerTypes} from '../../actions/videos'


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
    groupId,
    onNewVideoSubmit
  }
) => (
  <div>
    <form onSubmit={onNewVideoSubmit}>
      <input
        type='submit'
        value='submit'
      />
    </form>
  </div>
)

export default enhance(GroupVideosView)
