import React from 'react';
import { NavLink } from 'react-router-dom';

export const SubMenu = () => {
  return (
    <>
      <li>
        <NavLink className="nav-link" to="tempFunc">
          Temp Cal
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="searchFunc">
          Search
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="quiz">
          Quiz
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="todo">
          TODO
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="contact">
          Contact List
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="quote">
          Quote
        </NavLink>
      </li>
    </>
  );
};
