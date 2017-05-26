import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'


export const styles = {
  pageHeader: {
    alignItems: 'center',
    backgroundColor: '#212121',
    display: 'flex',
    height: '3em',
    justifyContent: 'space-between',
    width: '100%',
  },
  brand: {
    color: 'white',
    backgroundColor: '#212121',
    display: 'block',
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
  gradient: {
    blue: {
      stopColor: '#1976D2',
      stopOpacity: '1',
    },
    lightBlue: {
      stopColor: '#BBDEFB',
      stopOpacity: '1',
    },
    violet: {
      stopColor: '#210041',
      stopOpacity: '1',
    },
    magenta: {
      stopColor: '#9C27B0',
      stopOpacity: '1',
    },
    pink: {
      stopColor: '#E1BEE7',
      stopOpacity: '1',
    },
  }
}

const mapStateToProps = ({auth}) => ({
  auth
})


const PageHeader = ({auth}) => (
  <nav style={styles.pageHeader}>
    <Link style={styles.brand} to='/'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 45'>
        <defs>
          <linearGradient id='grad1' x1='0%' y1='20%' x2='0%' y2='85%'>
            <stop offset='0%' style={styles.gradient.blue} />
            <stop offset='40%' style={styles.gradient.blue} />
            <stop offset='40.1%' style={styles.gradient.lightBlue} />
            <stop offset='50%' style={styles.gradient.lightBlue} />
            <stop offset='50.1%' style={styles.gradient.violet} />
            <stop offset='63%' style={styles.gradient.violet} />
            <stop offset='63.1%' style={styles.gradient.magenta} />
            <stop offset='79%' style={styles.gradient.magenta} />
            <stop offset='79.1%' style={styles.gradient.pink} />
            <stop offset='100%' style={styles.gradient.pink} />
          </linearGradient>
        </defs>
        <text x='5' y='40' fontFamily='Arvo' fontWeight='bold' fontStyle='italic' fontSize='40' fill='url(#grad1)' style={styles.text}>iotv</text>
      </svg>
    </Link>
    {(Object.keys(auth).length !== 0) && (auth.user !== undefined) ?
      <Link style={styles.profile} to={`/me`}>{auth.user.email}</Link> :
      <Link style={styles.profile} to='/auth/login'>Sign in</Link>}
  </nav>
)

export default connect(mapStateToProps)(PageHeader)
