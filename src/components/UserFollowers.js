import React from 'react';
import UserNav from './UserNav';


const UserFollowers = ({params}) => (
  <UserNav active="followers" userId={params.userId}/>
);

export default UserFollowers;