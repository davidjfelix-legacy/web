import React, { Component } from 'react'
import { connect } from 'react-redux'

import database from '../database'
import { updateVideos } from '../actions/videos' 

import MenuLayout from '../components/MenuLayout'
import VideoPreviewsList from '../containers/VideoPreviewsList'


const mapStateToProps = ({ videos }) => ({
  videos
})

let onFirebaseValue = null

class HomeView extends Component {
  componentDidMount() {
    this.databaseRef = database.ref("videos")
    onFirebaseValue = this.databaseRef.on(
      'value',
      (snapshot) => (
        this.props.dispatch(updateVideos(snapshot.val()))
      )
    )
  }

  componentWillUnmount() {
    this.databaseRef.off('value', onFirebaseValue)
  }

  render() {
    return (
      <MenuLayout>
        <div>
          {this.props.videos === {} ? //FIXME: make this check work and provide a sensible default
            <div>No videos found</div> :
            <VideoPreviewsList videoPreviews={this.props.videos}/>
          }
        </div>
      </MenuLayout>
    )
  }
}

export default connect(mapStateToProps)(HomeView)
