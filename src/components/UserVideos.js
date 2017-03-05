import React from 'react';
import UserNav from './UserNav';


const UserVideos = ({params}) => (
  <UserNav active="videos" userName={params.userName}/>
);

export default UserVideos;