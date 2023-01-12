import React, { useEffect, useState } from 'react';
import useGameStore from '../utils/stores/useGameStore';
import './status-bar.css';
import StatusButtons from './StatusButtons';
import StatusMessage from './StatusMessage';

function StatusBar() {
  const { isWon, isLost } = useGameStore((state) => state.game);
  const [message, setMessage] = useState(0);

  useEffect(() => {
    if (isWon) {
      setMessage(1);
    } else if (isLost) {
      setMessage(2);
    } else {
      setMessage(0);
    }
  }, [isLost, isWon]);

  return (
    <div className="status-bar">
      <ul>
        <StatusButtons />
        <StatusMessage message={message} />
      </ul>
    </div>
  );
}

export default StatusBar;
