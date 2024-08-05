import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  "../styles/header.module.css" ; 
// import logo from '../public/assets/image.png'
import { useState } from 'react';

interface CustomToggleProps {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isOpen: boolean;
}

const CustomToggle = React.forwardRef<HTMLAnchorElement, CustomToggleProps>(({ children, onClick , isOpen }, ref) => (
  <a
    href="#"
    ref={ref}
    onMouseOver={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className={styles.navLink}
  >
    {children}
    <svg
      className={`${styles.caret} ${isOpen ? styles.open : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </a>
));


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="black" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/assets/image.png"
            width="100%"
            height="50"
            className="d-inline-block align-top"
            alt="Company logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
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


export default Header 