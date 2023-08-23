import React, { useEffect, useState } from 'react';
import useGameStore from '../utils/stores/useGameStore';
import StatusButtons from '../components/StatusButtons';
import StatusMessage from '../components/StatusMessage';
import Title from '../components/Title';

function StatusBar({ history }) {
  const { isWon, isLost } = useGameStore((state) => state.game);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isWon) {
      setMessage('You Won!');
    } else if (isLost) {
      setMessage('aww You Lost!');
    } else {
      setMessage('');
    }
  }, [isLost, isWon]);

  return (
    <div className="flex flex-col justify-center items-center py-2">
      <Title title="MineSweeper" />
      <StatusButtons
        history={history}
      />
      <StatusMessage message={message} />
    </div>
  );
}

export default StatusBar;
