import {DocumentCard, DocumentCardPreview, DocumentCardTitle} from 'office-ui-fabric-react'
import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {refreshVideo} from '../../actions/videos'
import {withDatabaseSubscribe} from '../hocs'
import * as _ from 'lodash'


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

const VideoPreviewCard = (
  {
    videoId,
    videos
  }) => (
  <DocumentCard onClickHref={`/videos/${videoId}`}>
    <DocumentCardPreview
      previewImages={[
        {
          previewIconProps: {iconName: 'Video', styles: {root: {fontSize: 42,}}},
          width: 318,
          height: 196,
        }
      ]}
    />
    <DocumentCardTitle
      title={_.get(videos, `${videoId}.title`, 'Untitled Video')}
      shouldTruncate={true}
    />
  </DocumentCard>
)

export default enhance(VideoPreviewCard)
