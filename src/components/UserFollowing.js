import React from 'react';
import UserNav from './UserNav';


const UserFollowing = ({params}) => (
  <UserNav active="following" userName={params.userName}/>
);

export default UserFollowing;