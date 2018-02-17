import * as gql from 'graphql-tag'
import * as React from 'react'
import {graphql} from 'react-apollo'

import VideosList from './videos/VideosList'


const HomeQuery = gql`
  query {
    videos {
      id
    }
  }
`

const HomeView = ({videos={}}) => (
  <div>
    {videos === {} ? //FIXME: make this check work and provide a sensible default
      <div>No videos found</div> :
      <VideosList videoIds={Object.keys(videos)}/>
    }
  </div>
)

export default graphql(HomeQuery)(HomeView)
