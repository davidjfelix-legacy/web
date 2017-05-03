import React from 'react';
import UserNav from './UserNav';


const UserVideos = ({params}) => (
  <UserNav active="videos" userId={params.userId}/>
);

export default UserVideos;