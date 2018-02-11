import React from 'react'

import VideosList from './videos/VideosList'


const HomeView = ({videos={}}) => (
  <div>
    {videos === {} ? //FIXME: make this check work and provide a sensible default
      <div>No videos found</div> :
      <VideosList videoIds={Object.keys(videos)}/>
    }
  </div>
)

export default HomeView
