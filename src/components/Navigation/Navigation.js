import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationStyled.css';
import { FaBars, FaWindowClose } from 'react-icons/fa';

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(~toggle);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <div>
            <Nav className={`${toggle ? 'active' : 'navbar'}`}>
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
              <NavLink className="nav-link" to="todo">
                TODO
              </NavLink>
              <NavLink className="nav-link btn-register" to="register">
                Register
              </NavLink>
            </Nav>
            <div className="icon" onClick={handleClick}>
              {toggle ? <FaWindowClose /> : <FaBars />}
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
