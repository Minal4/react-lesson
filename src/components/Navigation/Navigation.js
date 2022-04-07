import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationStyled.css';
import {
  FaBars,
  FaWindowClose,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { SubMenu } from './SubMenu';

export const Navigation = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <div>
            <Nav className={`${toggle ? 'active' : 'navbar'}`}>
              <ul>
                <li>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="count">
                    Projects
                  </NavLink>
                  <span onClick={() => setActive(!active)}>
                    <FaChevronDown />
                  </span>
                  <ul className={active ? 'active sub-menu' : 'sub-menu'}>
                    {' '}
                    <SubMenu />
                  </ul>
                </li>
                <li>
                  <NavLink className="nav-link btn-register" to="register">
                    Register
                  </NavLink>
                </li>
              </ul>
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
