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
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/assets/image.png"
            width="70%"
            height="40"
            className="d-inline-block align-top"
            alt="Quadrant Marketing"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${styles.navbarCollapse} ${isOpen ? styles.show : ''}`}>
          <Nav className={styles.navbarNav}>
            <Nav.Link className={styles.navLink} href="AllProducts">PRODUCT</Nav.Link>
            <Nav.Link className={styles.navLink} href="About">ABOUT US</Nav.Link>
            <Nav.Link className={styles.navLink} href="Contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;