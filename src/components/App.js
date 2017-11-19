import {Fabric, Layer, MessageBar} from 'office-ui-fabric-react'
import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import styled, {injectGlobal} from 'styled-components'

import {updateAuth} from '../actions/auth'
import {hideUploadPane} from '../actions/videoUploader'
import auth from '../auth'
import '../css/App.css'
import GroupContainer from './groups/GroupContainer'
import NewGroupView from './groups/NewGroupView'
import HomeView from './HomeView'
import LoginView from './LoginView'
import NewPerformanceView from './NewPerformanceView'
import NewSeriesView from './NewSeriesView'
import NewShowView from './NewShowView'
import PageHeader, {navHeight} from './PageHeader'
import PerformanceContainer from './PerformanceContainer'
import RegisterView from './RegisterView'
import SeriesContainer from './SeriesContainer'
import ShowContainer from './ShowContainer'
import UploadsView from './UploadsView'
import UserContainer from './users/UserContainer'
import VideoView from './videos/VideoView'


injectGlobal`
  @font-face {
    font-family: 'Arvo';
    font-style: normal;
    font-weight: 400;
    src: local('Arvo'), url(https://fonts.gstatic.com/s/arvo/v9/rC7kKhY-eUDY-ucISTIf5PesZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
`

const Menu = styled.nav`
  background-color: #d1d1d1;
  height: calc(100vh - ${navHeight});
  width: 25em;
`

const MenuLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const mapStateToProps = ({videoUploader}) => ({
  videoUploader,
})

const enhance = compose(
  connect(mapStateToProps),
  withState('isMenuVisible', 'setIsMenuVisible', false),
  withHandlers(
    {
      toggleMenuVisible: ({isMenuVisible, setIsMenuVisible}) => () => {
        setIsMenuVisible(!isMenuVisible)
      },
    }
  ),
  lifecycle(
    {
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

const App = (
  {
    dispatch,
    history,
    isMenuVisible,
    toggleMenuVisible,
    videoUploader,
  }) => (
  <Fabric>
    <ConnectedRouter history={history}>
      <div>
        <PageHeader onClickMenu={toggleMenuVisible}/>
        <MenuLayout>
          {isMenuVisible &&
          <Menu>
            Test
          </Menu>
          }
          <Switch>
            <Route exact path='/' component={HomeView}/>
            <Route exact path='/auth/login' component={LoginView}/>
            <Route exact path='/auth/register' component={RegisterView}/>
            <Route exact path='/groups/new' component={NewGroupView}/>
            <Route path='/groups/:groupId' component={GroupContainer}/>
            <Route exact path='/performances/new' component={NewPerformanceView}/>
            <Route path='/performances/:performanceId' component={PerformanceContainer}/>
            <Route exact path='/series/new' component={NewSeriesView}/>
            <Route path='/series/:seriesNameId' component={SeriesContainer}/>
            <Route exact path='/shows/new' component={NewShowView}/>
            <Route path='/shows/:showNameId' component={ShowContainer}/>
            <Route exact path='/uploads' component={UploadsView}/>
            <Route path='/users/:userId' component={UserContainer}/>
            <Route path='/videos/:videoId' component={VideoView}/>
            <Route component={HomeView}/>
          </Switch>
        </MenuLayout>
      </div>
    </ConnectedRouter>
    {videoUploader.isUploadPaneVisible ?
      <Layer>
        <MessageBar
          onDismiss={() => dispatch(hideUploadPane())}
        >
          <UploadsView/>
        </MessageBar>
      </Layer> :
      ''
    }
  </Fabric>
)

export default enhance(App)
