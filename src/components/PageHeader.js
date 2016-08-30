import React from 'react';
import { Link } from 'react-router';

import '../css/PageHeader.css';


const PageHeader = () => (
  <header className="PageHeader">
    <nav>
      <Link to={"/"} className="PageHeader_Brand">MG4.tv</Link>
    </nav>
  </header>
);

export default PageHeader;
