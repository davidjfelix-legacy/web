import * as _ from 'lodash'
import * as React from 'react'
import {connect} from 'react-redux'
import {compose, withProps} from 'recompose'

import {refreshVideo} from '../../actions/videos'
import {withDatabaseSubscribe, withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withProps(({match}) => ({
    videoId: match.params.videoId
  })),
  withDatabaseSubscribe(
    'value',
    ({videoId}) => (`videos/${videoId}`),
    ({dispatch, videoId}) => (snapshot) => (
      dispatch(refreshVideo(
        {
          videoId: videoId,
          videoSnapshot: snapshot.val()
        }
      ))
    )
  ),
  withLoading(
    ({videoId, videos}) => !(_.has(videos, videoId)),
    LoadingView
  ),
  withNotFound(
    ({videoId, videos}) => (_.isNull(_.get(videos, videoId, null))),
    NotFoundView
  )
)


const VideoView = (
  {
    videoId,
    videos,
  }
) => (
  <div>
    <LoadingView/>
  </div>
)

export default enhance(VideoView)
