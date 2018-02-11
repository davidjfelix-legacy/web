import * as _ from 'lodash'
import {DocumentCard, DocumentCardPreview, DocumentCardTitle} from 'office-ui-fabric-react'
import React from 'react'


const VideoPreviewCard = (
  {
    className = '',
    videoId,
    videos
  }) => (
  <div className={className}>
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
  </div>
)

export default VideoPreviewCard
