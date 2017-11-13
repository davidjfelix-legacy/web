import * as _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {compose} from 'recompose'
import styled from 'styled-components'

import Logo from './Logo.js'
import {Persona, PersonaInitialsColor, PersonaSize} from 'office-ui-fabric-react'


const Nav = styled.nav`
    align-items: center;
    background-color: #212121;
    display: flex;
    height: 3em;
    justify-content: space-between;
    width: 100%;
`

const BrandLink = styled(Link)`
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

const Inner = styled.div`
  align-items: center;
  display: flex;
`

const SignInLink = styled(Link)`
  color: white;
  padding-right: 1em;
`

const PersonaLink = styled(Link)`
  text-decoration: none;
`

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
)

const PageHeader = ({auth}) => (
  <Nav>
    <Inner>
      <BrandLink to='/'>
        <Logo/>
      </BrandLink>
    </Inner>
    {_.has(auth, 'user') && _.has(auth, 'user.uid') ?
      <PersonaLink to={`/users/${auth.user.uid}`}>
        <Persona
          imageUrl={'http://placekitten.com/g/50/50'}
          initialsColor={PersonaInitialsColor.darkBlue}
          imageInitials={'ME'}
          size={PersonaSize.extraSmall}/>
      </PersonaLink> :
      <SignInLink to='/auth/login'>Sign in</SignInLink>
    }
  </Nav>
)

export default enhance(PageHeader)
