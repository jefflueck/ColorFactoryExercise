import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewColor = () => {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([{ name: color }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors((colors) => [...colors, { name: color }]);
    setColor('');

    console.log(colors);
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
        <Link to="/colors">Go Back</Link>
        <ul>
          {colors.map((color) => (
            <li key={color.name}>
              <Link to={`/colors/${color.name}`}>{color.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewColor;
