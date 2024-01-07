import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { useLocation } from 'react-router-dom';
import logo from '../../components/imagee/icons8-home-64.png';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <span className="logo-text">SHEVIN HOMES</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" className={`m-1 ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
          <Nav.Link href="/properties" className={`m-1 ${location.pathname === '/properties' ? 'active' : ''}`}>Properties</Nav.Link>
          <Nav.Link href="/services" className={`m-1 ${location.pathname === '/services' ? 'active' : ''}`}>Services</Nav.Link>
          <Nav.Link href="/aboutus" className={`m-1 ${location.pathname === '/aboutus' ? 'active' : ''}`}>About Us</Nav.Link>
          <Nav.Link href="/contactus" className={`m-1 ${location.pathname === '/contactus' ? 'active' : ''}`}>Contact Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
