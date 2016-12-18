import React from 'react';
import { Link } from 'react-router';

import styles from '../css/PageHeader.css';


const PageHeader = () => (
  <header className={styles.PageHeader}>
    <nav>
      <Link to={"/"} className={styles.PageHeader__Brand}>MG4.tv</Link>
    </nav>
  </header>
);

export default PageHeader;
