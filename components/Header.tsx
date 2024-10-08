import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="black" expand="lg" sticky='top' className={styles.navbar}>
      <Container className={styles.navbarContainer} >
        <div className={styles.brandToggleWrapper} >
          <Navbar.Brand href="/" className={styles.navbarBrand} >
            <img
              src="/assets/logo.png"
              height="50"
              // className="d-inline-block align-top"
              alt="Quadrant Marketing"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} className={styles.navbarToggle}  style ={{marginRight:'0%',paddingRight:"0%"}} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.navbarCollapse} ${isOpen ? styles.show : ''}`} >
          <Nav className={styles.navbarNav}>
            <Nav.Link className={styles.navLink} style={{ fontSize: '1rem' }} href="AllProducts">PRODUCT</Nav.Link>
            <Nav.Link className={styles.navLink} style={{ fontSize: '1rem'}} href="About">ABOUT</Nav.Link>
            <Nav.Link className={styles.navLink} style={{ fontSize: '1rem' }} href="Contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;