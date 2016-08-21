import React, { Component } from 'react';

import CommentStream from './CommentStream';
import VideoContainer from './VideoContainer';

import '../css/VideoView.css';


class VideoView extends Component {
  render() {
    return (
      <div>
        <VideoContainer
          videoWidth={960}
          videoSources={["https://s3.amazonaws.com/buukkittt/bbb_sunflower_1080p_60fps_normal.mp4"]}
        />
        <CommentStream
          events={[
            {
              action: {
                type: 'ADD_COMMENT',
                comment: 'Test Comment. Please don\'t upvote',
                commentId: '1234',
                user: 'david',
                userId: '1234',
              },
              triggerTime: 5.1,
            },
            {
              action: {
                type: 'DELETE_COMMENT',
                commentId: '1234'
              },
              triggerTime: 10,
            }
          ]}
        />
      </div>
    );
  }
}

export default VideoView;

