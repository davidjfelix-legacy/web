import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {withLoading, withNotFound} from './hocs'
import LoadingView from './LoadingView'
import NotFoundView from './NotFoundView'

const styles = {
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '2em',
  }
}

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
  withLoading(
    (props) => (Object.keys(props.auth).length === 0),
    LoadingView
  ),
  withNotFound(
    (props) => (props.auth.user === null),
    NotFoundView
  )
)

const MeContainer = ({auth, children}) => (
  <div style={styles.view}>
  </div>
)

export default enhance(MeContainer)