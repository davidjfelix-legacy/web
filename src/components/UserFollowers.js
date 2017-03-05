import React from 'react';
import UserNav from './UserNav';


const UserFollowers = ({params}) => (
  <UserNav active="followers" userName={params.userName}/>
);

export default UserFollowers;