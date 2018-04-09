import * as _ from 'lodash'
import {Persona, PersonaInitialsColor, PersonaSize} from 'office-ui-fabric-react'
import React from 'react'
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap'
import styled from 'styled-components'

import Logo from './Logo'


export const navHeight = '3em'


const BrandLink = styled(NavbarBrand)`
    color: white;
    background-color: inherit;
    display: inline-block;
    font-family: Arvo,sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    font-style: italic;
    text-decoration: none;
    width: 80px;
`

const PageHeader = (
  {
    auth,
    onClickMenu,
  }) => (
  <Navbar dark color="dark" expand>
    <BrandLink href="/">
      <Logo/>
    </BrandLink>
    <Nav className="ml-auto" navbar>
      <NavItem>
        {_.has(auth, 'user') && _.has(auth, 'user.uid') ?
          <NavLink href={`/users/${auth.user.uid}`}>
            <Persona
              imageUrl={'http://placekitten.com/g/50/50'}
              initialsColor={PersonaInitialsColor.darkBlue}
              imageInitials={'ME'}
              size={PersonaSize.extraSmall}
            />
          </NavLink> :
          <NavLink href='/auth/login'>Sign in</NavLink>
        }
      </NavItem>
    </Nav>
  </Navbar>
)

export default PageHeader
