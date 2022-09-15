import React from 'react';
import { NavLink } from 'react-router-dom';

const Colors = ({ colors }) => {
  return (
    <>
      <div>
        <h1>Colors</h1>
      </div>
      <div>
        <ul>
          {colors.map((color) => (
            <li key={color.name}>
              <NavLink colors={colors} to={`/colors/${color.name}`}>
                {color.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Colors;
