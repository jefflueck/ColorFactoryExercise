import React from 'react';
import { NavLink } from 'react-router-dom';

const Color = ({ color }) => {
  console.log(color);
  return (
    <>
      <div>
        <h1>Color</h1>
        {color && <h2>{color.name}</h2>}
      </div>
      <NavLink to="/colors/new">Go Back</NavLink>
    </>
  );
};

export default Color;
