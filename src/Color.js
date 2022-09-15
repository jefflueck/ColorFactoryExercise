import React from 'react';

const Color = ({ color }) => {
  const colorDetails = color.find((c) => c.name === color);
  return (
    <div>
      <h1>{colorDetails.name}</h1>
      <p>{colorDetails.hex}</p>
    </div>
  );
};

export default Color;
