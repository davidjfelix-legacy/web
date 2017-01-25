import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import { Link } from 'react-router';

import styles from '../css/PageHeader.css';


const PageHeader = () => (
  <Header colorIndex="grey-2" size="small" seperator="none">
    <Menu inline={true} pad={{horizontal: "small", vertical: "none"}}>
      <Anchor path="/" className={styles.Brand} label="MG4.tv" tag={Link}/>
    </Menu>
  </Header>
);

export default PageHeader;
