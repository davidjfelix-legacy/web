import React, { Component } from 'react';
import { Link } from 'react-router';


class PageHeader extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-primary">
          <Link to={"/"} className="navbar-brand">Mg4.tv</Link>
        </nav>
      </header>
    );
  }
}

export default PageHeader;

