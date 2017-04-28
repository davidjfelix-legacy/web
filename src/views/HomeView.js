import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'


import MenuLayout from '../components/MenuLayout'
import VideoPreviewsList from '../containers/VideoPreviewsList'


const mapStateToProps = ({ firebase }) => ({
  videos: dataToJS(firebase, 'videos')
})

class HomeView extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <MenuLayout>
        <div>
          {JSON.stringify(this.props.videos)}
        </div>
      </MenuLayout>
    )
  }
}

export default firebaseConnect(['videos'])(connect(mapStateToProps)(HomeView))
