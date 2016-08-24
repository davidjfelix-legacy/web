import { connect } from 'react-redux';

import CommentList from './CommentList';

const mapStateToProps = (state) => {
  return {
    comments: ["this is a comment", "so is this"],
  };
};

const CommentStream = connect(
  mapStateToProps
)(CommentList);

export default CommentStream;
