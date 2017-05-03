import React from 'react';
import UserNav from './UserNav';


const UserFollowing = ({params}) => (
  <UserNav active="following" userId={params.userId}/>
);

export default UserFollowing;