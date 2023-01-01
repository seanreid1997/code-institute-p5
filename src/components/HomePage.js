
import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="50" border-radius="25" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register" >Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
  }
}

export default HomePage