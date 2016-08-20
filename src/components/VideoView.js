import React, { Component } from 'react';

import VideoContainer from './VideoContainer';

import './VideoView.css';


class VideoView extends Component {
  render() {
    return (
      <div>
        <VideoContainer
          addOns={[
            {
              type: "CommentStream",
              events: [
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
                },
              ],
              data: {}
            },
          ]}
          videoWidth={960}
          videoSources={["https://s3.amazonaws.com/buukkittt/bbb_sunflower_1080p_60fps_normal.mp4"]}
        />
      </div>
    );
  }
}

export default VideoView;

