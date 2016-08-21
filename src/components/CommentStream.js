import React, { Component } from 'react';


class CommentStream extends Component {
  render() {
    return (
      <ul>
        {this.props.events.map((event, index) => (
          <li key={index}>{JSON.stringify(event)}</li>
        ))}
      </ul>
    );
  }
}

CommentStream.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default CommentStream;

