import React from 'react';
import useGameStore from '../utils/stores/useGameStore';
import './status-bar.css';
import StatusButtons from './StatusButtons';

function StatusBar() {
  const { isWon, isLost } = useGameStore((state) => state.game);

  return (
    <div className="status-bar">
      <ul>
        <li>{isWon && 'You Won!'}</li>
        <li>{isLost && 'aww You lost!'}</li>
        <StatusButtons />
      </ul>
    </div>
  );
}

export default StatusBar;
