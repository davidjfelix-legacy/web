import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavbarBrand } from 'reactstrap';


export const styles = {
  Brand: {
    color: "white",
    fontFamily: "Exo",
    fontSize: "1.5em",
    fontWeight: 900,
    textDecoration: "none",
    textWeight: "1px black"
  }
};


const PageHeader = () => (
  <Navbar color="inverse" inverse toggleable>
    <NavbarBrand style={styles.Brand}>
      <Link to="/">MG4.tv</Link>
    </NavbarBrand>
  </Navbar>
);

export default PageHeader;
