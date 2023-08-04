import React from 'react';

function Title({ title }) {
  return (
    <h1
      className="font-borel lg:text-3xl text-xl py-2"
    >
      {title}
    </h1>
  );
}

export default Title;
