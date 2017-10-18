import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {withDatabaseSubscribe} from '../hocs'
import {refreshVideo} from '../../actions/videos'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => (`videos/${props.videoId}`),
    (props) => (snapshot) => (
      props.dispatch(refreshVideo(
        {
          videoId: props.videoId,
          videoSnapshot: snapshot.val()
        })
      )
    )
  )
)

const VideoPreviewCard = ({videoId, videos}) => (
  <div>
    {JSON.stringify(_.get(videos, videoId, {}))}
  </div>
)

export default enhance(VideoPreviewCard)
