import * as _ from 'lodash'
import {IconButton, Panel, Persona, PersonaInitialsColor, PersonaSize} from 'office-ui-fabric-react'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {compose, withHandlers, withState} from 'recompose'
import styled from 'styled-components'

import Logo from './Logo.js'


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

const mapStateToProps = ({auth}) => ({
  auth
})

const enhance = compose(
  connect(mapStateToProps),
  withState('isPanelOpen', 'setIsPanelOpen', false),
  withHandlers(
    {
      togglePanelOpen: ({isPanelOpen, setIsPanelOpen}) => () => {
        setIsPanelOpen(!isPanelOpen)
      },
    }),
)

const PageHeader = (
  {
    auth,
    isPanelOpen,
    togglePanelOpen,
  }) => (
  <Nav>
    <Inner>
      <IconButton
        onClick={togglePanelOpen}
        iconProps={{iconName: 'CollapseMenu', style: {color: 'white'}}}
      />
      <Panel isOpen={isPanelOpen}>ContentGoesHere</Panel>
      <BrandLink to='/'>
        <Logo/>
      </BrandLink>
    </Inner>
    {_.has(auth, 'user') && _.has(auth, 'user.uid') ?
      <Link to={`/users/${auth.user.uid}`}>
        <Persona
          imageUrl={'http://placekitten.com/g/50/50'}
          initialsColor={PersonaInitialsColor.darkBlue}
          imageInitials={'ME'}
          size={PersonaSize.extraSmall}
        />
      </Link> :
      <SignInLink to='/auth/login'>Sign in</SignInLink>
    }
  </Nav>
)

export default enhance(PageHeader)
