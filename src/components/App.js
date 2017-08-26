import React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import {Route, Switch} from "react-router"
import {ConnectedRouter} from "react-router-redux"


import auth from '../auth'
import {updateAuth} from '../actions/auth'
import PageHeader from './PageHeader'
import HomeView from "./HomeView"
import VideoView from "./VideoView"
import UserContainer from "./UserContainer"
import GroupView from "../views/GroupView"

import '../css/App.css'


const styles = {
  app: {
    minHeight: '100vh',
  },
}

const enhance = compose(
  connect(),
  lifecycle({
    componentWillMount() {
      this.unsubscribeAuth = auth.onAuthStateChanged((user) => (
        this.props.dispatch(updateAuth({user}))
      ))
    },

    componentWillUnmount() {
      this.unsubscribeAuth()
    },
  }),
)

const App = ({history}) => (
  <div style={styles.auth}>
    <ConnectedRouter history={history}>
      <div>
        <PageHeader/>
        <Switch>
          <Route path='/' component={HomeView}/>
          <Route path='groups/:groupName' component={GroupView}/>
          <Route path='users/:userId' component={UserContainer}/>
          <Route path='videos/:videoId' component={VideoView}/>
          <Route component={HomeView}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </div>
)

export default enhance(App)
