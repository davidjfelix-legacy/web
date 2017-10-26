import React from 'react'
import styled from 'styled-components'


import VideoPreviewCard from '../videos/VideoPreviewCard'


const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const VideosList = ({videoIds}) => (
  <List>{videoIds.map((videoId) => (
    <VideoPreviewCard videoId={videoId} key={videoId}/>
  ))}</List>
)

export default VideosList
