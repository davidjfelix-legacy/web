import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'recompose'
import Icon, {IconTypes} from "./Icon";


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
  },
  '@font-face': {
    fontFamily: 'Arvo',
    fontStyle: 'normal',
    fontWeight: '400',
    src: "local('Arvo'), url(https://fonts.gstatic.com/s/arvo/v9/rC7kKhY-eUDY-ucISTIf5PesZW2xOQ-xsNqO47m55DA.woff2) format('woff2')",
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
  },
}

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
)

const PageHeader = ({auth}) => (
  <nav style={styles.pageHeader}>
    <div style={styles.inner}>
      <Icon icon={IconTypes.MENU} color="#fff"/>
      <Link style={styles.brand} to='/'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 45'>
          <defs>
            <linearGradient id='grad1' x1='0%' y1='20%' x2='0%' y2='85%'>
              <stop offset='0%' style={styles.gradient.blue}/>
              <stop offset='40%' style={styles.gradient.blue}/>
              <stop offset='40.1%' style={styles.gradient.lightBlue}/>
              <stop offset='50%' style={styles.gradient.lightBlue}/>
              <stop offset='50.1%' style={styles.gradient.violet}/>
              <stop offset='63%' style={styles.gradient.violet}/>
              <stop offset='63.1%' style={styles.gradient.magenta}/>
              <stop offset='79%' style={styles.gradient.magenta}/>
              <stop offset='79.1%' style={styles.gradient.pink}/>
              <stop offset='100%' style={styles.gradient.pink}/>
            </linearGradient>
          </defs>
          <text x='5' y='40' fontFamily='Arvo' fontWeight='bold' fontStyle='italic' fontSize='40' fill='url(#grad1)'
                style={styles.text}>iotv
          </text>
        </svg>
      </Link>
    </div>
    {(Object.keys(auth).length !== 0) && (auth.user !== null) ?
      <Link style={styles.profile} to={`/users/${auth.user.uid}`}>{auth.user.email}</Link> :
      <Link style={styles.profile} to='/auth/login'>Sign in</Link>}
  </nav>
)

export default enhance(PageHeader)
