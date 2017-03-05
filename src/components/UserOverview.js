import React from 'react';
import UserNav from './UserNav';


const UserOverview = ({params}) => (
  <UserNav active="overview" userName={params.userName}/>
);

export default UserOverview;