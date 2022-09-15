import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewColor = () => {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);
  console.log(colors);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors((colors) => [...colors, color]);
    setColor('');
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            value={color}
            onChange={handleChange}
          />
          <button>Add A New Color</button>
        </form>
      </div>
      <div>
        <ul>
          {colors.map((color) => (
            <li key={color}>
              <Link to={`/colors/${color}`}>{color}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewColor;
