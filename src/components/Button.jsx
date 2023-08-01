import React from 'react';

function Button({ name, click }) {
  return (
    <button
      className="bg-violet-400 text-white text-md font-bold w-28 h-16 rounded-2xl m-1 hover:bg-violet-500 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
      type="button"
      onClick={click}
    >
      {name}
    </button>
  );
}

export default Button;
