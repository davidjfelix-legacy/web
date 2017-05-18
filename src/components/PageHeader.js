import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'


export const styles = {
  pageHeader: {
    backgroundColor: "#212121",
    display: 'flex',
    height: '2.5em',
    justifyContent: 'space-between',
    width: '100%',
  },
  brand: {
    color: "white",
    backgroundColor: "#212121",
    fontFamily: "Arvo",
    fontSize: "1.5em",
    fontWeight: 700,
    fontStyle: "italic",
    textDecoration: "none",
    textWeight: "1px black"
  },
  profile: {
    color: "white"
  }
}

const mapStateToProps = ({auth}) => ({
  auth
})


const PageHeader = ({auth}) => (
  <nav style={styles.pageHeader}>
    <Link style={styles.brand} to="/">iotv</Link>
    {auth.user !== null ?
      <Link style={styles.profile} to={`/u/${auth.user.uid}`}>{auth.user.email}</Link> :
      <Link style={styles.profile} to='/a/login'>Sign in</Link>}
  </nav>
)

export default connect(mapStateToProps)(PageHeader)
