import React from 'react';

function Button({ name, click }) {
  return (
    <button
      type="button"
      onClick={click}
    >
      {name}
    </button>
  );
}

export default Button;
