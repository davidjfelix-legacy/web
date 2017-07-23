import React from 'react'
import { compose, getContext } from 'recompose'

import UserNav, { navLinks } from './UserNav'
import { context } from './UserView'


const enhanceSubs = compose(
  getContext(context),
)

const UserOrganizations = ({baseUrl}) => (
  <div>
    <UserNav baseUrl={baseUrl} active={navLinks.organizations} />
  </div>
)

export default enhanceSubs(UserOrganizations)