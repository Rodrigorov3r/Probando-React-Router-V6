import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

const SuperNav = () => {
  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Probando React Router
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="flex-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet />
      </section>
    </>
  );
};

export default SuperNav;
