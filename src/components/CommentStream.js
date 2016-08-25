import { connect } from 'react-redux';

import CommentList from './CommentList';

const mapStateToProps = (state) => {
  return state.commentStream;
};

const CommentStream = connect(
  mapStateToProps
)(CommentList);

export default CommentStream;
