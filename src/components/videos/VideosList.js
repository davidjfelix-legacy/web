import React from 'react'
import styled from 'styled-components'


import VideoPreviewCard from '../videos/VideoPreviewCard'


const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled(VideoPreviewCard)`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 1em;
`

const VideosList = ({videoIds}) => (
  <List>{videoIds.map((videoId) => (
    <Card videoId={videoId} key={videoId}/>
  ))}</List>
)

export default VideosList
