import React from 'react';

function Display({ display }) {
  return (
    <p
      className="flex select-none text-white text-2xl absolute"
    >
      {display}
    </p>
  );
}

export default Display;
