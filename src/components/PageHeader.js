import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {compose} from 'recompose'
import styled from 'styled-components'
import * as _ from 'lodash'


export const styles = {
  pageHeader: {
    alignItems: 'center',
    backgroundColor: '#212121',
    display: 'flex',
    height: '3em',
    justifyContent: 'space-between',
    width: '100%',
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
  },
  brand: {
    color: 'white',
    backgroundColor: '#212121',
    display: 'inline-block',
    fontFamily: 'Arvo',
    fontSize: '1.5em',
    fontWeight: 700,
    fontStyle: 'italic',
    paddingLeft: '.5em',
    textDecoration: 'none',
    textWeight: '1px black',
    width: '80px',
  },
  profile: {
    color: 'white',
    paddingRight: '1em'
  },
  text: {
    paintOrder: 'stroke',
    stroke: '#ffffff',
    strokeWidth: '2px',
    strokeLinecap: 'butt',
    strokeLinejoin: 'miter',
  },
}

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
)


const BlueStop = styled.stop`
  stop-color: #1976D2;
  stop-opacity: 1;
`

const LightBlueStop = styled.stop`
  stop-color: #BBDEFB;
  stop-opacity: 1;
`

const MagentaStop = styled.stop`
  stop-color: #9C27B0;
  stop-opacity: 1;
`

const VioletStop = styled.stop`
  stop-color: #210041;
  stop-opacity: 1;
`

const PinkStop = styled.stop`
  stop-color: #E1BEE7;
  stop-opacity: 1;
`

const PageHeader = ({auth}) => (
  <nav style={styles.pageHeader}>
    <div style={styles.inner}>
      <Link style={styles.brand} to='/'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 45'>
          <defs>
            <linearGradient id='grad1' x1='0%' y1='20%' x2='0%' y2='85%'>
              <BlueStop offset='0%'/>
              <BlueStop offset='40%'/>
              <LightBlueStop offset='40.1%'/>
              <LightBlueStop offset='50%'/>
              <VioletStop offset='50.1%'/>
              <VioletStop offset='63%'/>
              <MagentaStop offset='63.1%'/>
              <MagentaStop offset='79%'/>
              <PinkStop offset='79.1%'/>
              <PinkStop offset='100%'/>
            </linearGradient>
          </defs>
          <text
            x='5' y='40' fontFamily='Arvo' fontWeight='bold' fontStyle='italic' fontSize='40' fill='url(#grad1)'
            style={styles.text}
          >iotv
          </text>
        </svg>
      </Link>
    </div>
    {_.has(auth, 'user') ?
      <Link style={styles.profile} to={`/users/${auth.user.uid}`}>{auth.user.email}</Link> :
      <Link style={styles.profile} to='/auth/login'>Sign in</Link>}
  </nav>
)

export default enhance(PageHeader)
