import React from 'react';
import UserNav from './UserNav';


const UserOrganizations = ({params}) => (
  <UserNav active="organizations" userName={params.userName}/>
);

export default UserOrganizations;