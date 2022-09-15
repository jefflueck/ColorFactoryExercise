import React from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';

const Colors = ({ colors }) => {
  const history = useHistory();
  const { color } = useParams();
  return (
    <>
      <div>
        <h1>Colors</h1>
      </div>
      <div>
        <ul>
          {colors.map((color) => (
            <li key={color.name}>
              <NavLink to={`/colors/${color.name}`}>{color.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Colors;
