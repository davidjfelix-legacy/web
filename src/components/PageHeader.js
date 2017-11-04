import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {compose} from 'recompose'
import styled from 'styled-components'

import Logo from './Logo.js'


export const styles = {
  inner: {
    alignItems: 'center',
    display: 'flex',
  },
  profile: {
    color: 'white',
    paddingRight: '1em'
  },
}

const Nav = styled.nav`
    align-items: center;
    background-color: #212121;
    display: flex;
    height: 3em;
    justify-content: space-between;
    width: 100%;
`

const Brand = styled(Link)`
    color: white;
    background-color: #212121;
    display: inline-block;
    font-family: Arvo,sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    font-style: italic;
    padding-left: .5em;
    text-decoration: none;
    width: 80px;
`

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
)

const PageHeader = ({auth}) => (
  <Nav>
    <div style={styles.inner}>
      <Brand to='/'>
        <Logo/>
      </Brand>
    </div>
    {_.has(auth, 'user') ?
      <Link style={styles.profile} to={`/users/${auth.user.uid}`}>{auth.user.email}</Link> :
      <Link style={styles.profile} to='/auth/login'>Sign in</Link>}
  </Nav>
)

export default enhance(PageHeader)
