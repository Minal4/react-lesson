import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="my-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="count">
              Counter
            </NavLink>
            <NavLink className="nav-link" to="tempFunc">
              Temp Cal
            </NavLink>
            <NavLink className="nav-link" to="searchFunc">
              Search
            </NavLink>
            <NavLink className="nav-link" to="quiz">
              Quiz
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
