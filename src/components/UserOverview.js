import React from 'react'

import UserNav from './UserNav'


const UserOverview = ({params}) => (
  <UserNav active="overview" userId={params.userId}/>
)

export default UserOverview