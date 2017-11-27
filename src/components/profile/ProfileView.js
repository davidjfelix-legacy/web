import * as _ from 'lodash'
import * as React from 'react'
import {Switch} from 'react-router'
import {NavLink, Route} from 'react-router-dom'
import styled from 'styled-components'

import NotFoundView from '../NotFoundView'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2em;
  width: calc(100% - 4em);
`

const NonSwitchedContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

const ProfileNav = styled.nav`
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 1em;
`

const activeProfileNavLinkClassName = 'active-profile-nav-link'

const ProfileNavLink = styled(NavLink).attrs(
  {
    activeProfileNavLinkClassName
  })`
  display: flex;
  align-items: flex-end;
  height: 3em;
  border-bottom: 1px solid #818181;
  color: #212121;
  padding: 1em;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #dd4b39;
    color: #dd4b39;
  }

  &.${activeProfileNavLinkClassName} {
    color: #dd4b39;
    font-weight: bold;
    border-bottom: 2px solid #dd4b39;
  }
`


const ProfileView = (
  {
    basePath,
    baseUrl,
    baseView = {},
    image = {},
    subViews = {},
  }) => (
  <Container>
    <NonSwitchedContent>
      <img
        src={_.get(image, 'src', '')}
        alt={_.get(image, 'alt', '')}
      />
      <ProfileNav>
        <ProfileNavLink
          activeClassName={activeProfileNavLinkClassName}
          exact
          to={baseUrl}
        >
          {_.get(baseView, 'linkText', _.get(baseView, 'path', '/'))}
        </ProfileNavLink>
        {Object.keys(subViews).map((key) => (
          <ProfileNavLink
            key={key}
            activeClassName={activeProfileNavLinkClassName}
            exact
            to={`${baseUrl}/${_.get(subViews, `${key}.path`, key)}`}
          >
            {key}
          </ProfileNavLink>
        ))}
      </ProfileNav>
    </NonSwitchedContent>
    <Switch>
      {Object.keys(subViews)
        .map((key) => (
          <Route
            key={key}
            path={`${basePath}/${_.get(subViews, `${key}.path`, '')}`}
            component={_.get(subViews, `${key}.component`, NotFoundView)}
          />
        ))}
      <Route path={`${basePath}/`} component={_.get(baseView, 'component', NotFoundView)}/>
    </Switch>
  </Container>
)

export default ProfileView
