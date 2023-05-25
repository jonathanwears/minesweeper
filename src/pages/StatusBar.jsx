import React, { useEffect, useState } from 'react';
import useGameStore from '../utils/stores/useGameStore';
import './status-bar.css';
import StatusButtons from '../components/statusBar/StatusButtons';
import StatusMessage from '../components/statusBar/StatusMessage';
import Title from '../components/Title';

function StatusBar() {
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
    <div className="status-bar">
      <Title title="MineSweeper" />
      <StatusButtons />
      <StatusMessage message={message} />
    </div>
  );
}

export default StatusBar;
