import React from 'react';

function StatusMessage({ message }) {
  return (
    <p
      className="h-4 lg:text-xl text:lg py-5"
    >
      {message}
    </p>
  );
}

export default StatusMessage;
