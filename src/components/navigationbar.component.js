import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navigationbar extends Component {

  render() {
    return (
      <Navbar bg="success" expand="lg" variant="dark">
        <Navbar.Brand>BFRTC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/membership" className="nav-link">Membership</Link>
            </li>
            <li className="navbar-item">
              <Link to="/coaching" className="nav-link">Coaching</Link>
            </li>
            <li className="navbar-item">
              <Link to="/court_hire" className="nav-link">Court Hire</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}