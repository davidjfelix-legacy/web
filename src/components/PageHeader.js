import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Navbar, NavbarBrand } from 'reactstrap'


export const styles = {
  Brand: {
    color: "white",
    fontFamily: "Arvo",
    fontSize: "1.5em",
    fontWeight: 700,
    fontStyle: "italic",
    textDecoration: "none",
    textWeight: "1px black"
  },
  email: {
    color: "white"
  }
}

const mapStateToProps = ({auth}) => ({
  auth
})


const PageHeader = ({auth}) => (
  <Navbar color="inverse" inverse toggleable>
    <NavbarBrand style={styles.Brand} to="/" tag={Link}>iotv</NavbarBrand>
    {auth.user !== null ? <div style={styles.email}>{auth.user.email}</div> : <p></p>}
  </Navbar>
)

export default connect(mapStateToProps)(PageHeader)
