import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {compose} from 'recompose'

import {refreshVideo} from '../../actions/videos'
import {withDatabaseSubscribe} from '../hocs'


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
    <Link to={`/videos/${videoId}`}>
      {JSON.stringify(_.get(videos, videoId, {}))}
    </Link>
  </div>
)

export default enhance(VideoPreviewCard)
