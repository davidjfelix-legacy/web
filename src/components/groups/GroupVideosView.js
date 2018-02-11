import * as _ from 'lodash'
import React from 'react'
import {compose, withHandlers, withProps} from 'recompose'

import VideosList from '../videos/VideosList'


const enhance = compose(
  withProps(({match}) => ({
    groupId: match.params.groupId
  })),
  withHandlers(
    {
      onNewVideoSubmit: props => event => {
        event.preventDefault()
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
