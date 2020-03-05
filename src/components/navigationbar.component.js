import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navigationbar extends Component {

  render() {
    return (
      <Navbar bg="success" expand="lg" variant="dark">
        <Navbar.Brand>BFRV Tennis Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/membership" className="nav-link">Membership</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}