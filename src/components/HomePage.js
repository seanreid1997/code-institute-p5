
import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import styles from "../styles/Base.module.css";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <header  className={styles.Header}>
        <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
          <img src={logo} alt="logo" height="50" border-radius="25" />
        </NavLink>
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register" >Register</NavLink>
            <NavLink to="/contact" >Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <Container className={styles.Footer}>
    <footer fixed="bottom">
  <div>
    © 2023 Copyright:
    <br></br>
    <a href='https://twitter.com/'>
      <i class="fab fa-twitter"></i>
      </a>
    <a href='https://en-gb.facebook.com/'>
      <i class="fab fa-facebook-f"></i>
      </a>
      <a href='https://www.instagram.com/'>
      <i class="fab fa-instagram"></i>
      </a>
  </div>
</footer>
    </Container>
        </div>
    )
  }
}

export default HomePage