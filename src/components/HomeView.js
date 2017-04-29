import React, { Component } from 'react'
import { connect } from 'react-redux'

import database from '../database'
import { updateVideos } from '../actions/videos' 

import MenuLayout from '../components/MenuLayout'


const mapStateToProps = ({ videos }) => ({
  videos
})


class HomeView extends Component {
  componentDidMount() {
    this.firebaseListener = database.ref("videos").on("value", (snapshot) => (
      this.props.dispatch(updateVideos(snapshot.val()))
    ))
  }

  render() {
    return (
      <MenuLayout>
        <div>
          {this.props.videos === {} ? <div>No videos found</div> : Object.keys(this.props.videos).map(
            (key, index) => (<div key={key}>{JSON.stringify(this.props.videos[key])}</div>)
          )}
        </div>
      </MenuLayout>
    )
  }
}

export default connect(mapStateToProps)(HomeView)
