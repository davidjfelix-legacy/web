import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import {compose, lifecycle} from 'recompose'

import {updateAuth} from '../actions/auth'
import auth from '../auth'

import '../css/App.css'
import GroupContainer from './groups/GroupContainer'
import NewGroupView from './groups/NewGroupView'
import HomeView from './HomeView'
import LoginView from './LoginView'
import MeContainer from './MeContainer'
import NewPerformanceView from './NewPerformanceView'
import NewSeriesView from './NewSeriesView'
import NewShowView from './NewShowView'
import PageHeader from './PageHeader'
import PerformanceContainer from './PerformanceContainer'
import RegisterView from './RegisterView'
import SeriesContainer from './SeriesContainer'
import ShowContainer from './ShowContainer'
import UserContainer from './UserContainer'
import NewVideoView from './videos/NewVideoView'
import VideoView from './videos/VideoView'


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
          <Route exact path='/' component={HomeView}/>
          <Route exact path='/auth/login' component={LoginView}/>
          <Route exact path='/auth/register' component={RegisterView}/>
          <Route path='/me' component={MeContainer}/>
          <Route exact path='/groups/new' component={NewGroupView}/>
          <Route path='/groups/:groupId' component={GroupContainer}/>
          <Route exact path='/performances/new' component={NewPerformanceView}/>
          <Route path='/performances/:performanceId' component={PerformanceContainer}/>
          <Route exact path='/series/new' component={NewSeriesView}/>
          <Route path='/series/:seriesNameId' component={SeriesContainer}/>
          <Route exact path='/shows/new' component={NewShowView}/>
          <Route path='/shows/:showNameId' component={ShowContainer}/>
          <Route path='/users/:userId' component={UserContainer}/>
          <Route exact path='/videos/new' component={NewVideoView}/>
          <Route path='/videos/:videoId' component={VideoView}/>
          <Route component={HomeView}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </div>
)

export default enhance(App)
