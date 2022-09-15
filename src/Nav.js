import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <NavLink exact to="/colors/new">
      <button>Add a Color</button>
    </NavLink>
  );
};

export default Nav;
