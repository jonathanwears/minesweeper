import React from 'react';

function StatusMessage({ message }) {
  const messages = {
    0: '',
    1: 'You Won!',
    2: 'aww You Lost!',
  };

  return <p data-testid="statusMessage">{messages[message]}</p>;
}

export default StatusMessage;
