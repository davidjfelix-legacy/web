import React, { Component } from 'react';
import { Link } from 'react-router';

class HomeView extends Component {
  render() {
    return (
      <div>
        <Link to={"v/1"}>Video Link</Link>
      </div>
    );
  }
}

export default HomeView;

