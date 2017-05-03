import React from 'react';
import UserNav from './UserNav';


const UserOrganizations = ({params}) => (
  <UserNav active="organizations" userId={params.userId}/>
);

export default UserOrganizations;