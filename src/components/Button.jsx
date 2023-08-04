import React from 'react';

function Button({ name, click }) {
  return (
    <button
      className="bg-violet-400 text-white text-xs lg:text-sm font-bold w-20 h-8 lg:w-24 lg:h-12 rounded-2xl m-1 hover:bg-violet-500 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
      type="button"
      onClick={click}
    >
      {name}
    </button>
  );
}

export default Button;
