import React, { Component } from 'react';
import { Link } from 'react-router';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      videos: ["hello", "world"]
    };
  }
  
  render() {
    return (
      <div>
        {this.state.videos.map((video, index) => (
          <Link to={"v/1"} key={index}>Video Link</Link>
        ))}
      </div>
    );
  }
}

export default HomeView;

