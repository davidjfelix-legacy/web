import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import database from '../database'
import { updateVideos } from '../actions/videos' 

import MenuLayout from './MenuLayout'
import VideoPreviewsList from './VideoPreviewsList'


const mapStateToProps = ({ videos }) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      this.databaseRef = database.ref("videos")
      this.onFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateVideos(snapshot.val()))
        )
      )
    },

    componentWillUnmount() {
      this.databaseRef.off('value', this.onFirebaseValue)
    },
  }),
)

const HomeView = ({videos}) => (
  <MenuLayout>
    <div>
      {videos === {} ? //FIXME: make this check work and provide a sensible default
        <div>No videos found</div> :
        <VideoPreviewsList videoPreviews={videos}/>
      }
    </div>
  </MenuLayout>
)

export default enhance(HomeView)
