import React from 'react';


const CommentList = ({comments}) => (
  <ul>
  {comments.map((comment, index) => (
    <li key={index}>{comment}</li>
  ))}
  </ul>
);

export default CommentList;
