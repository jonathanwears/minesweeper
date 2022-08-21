import React from 'react';
import useGameStore from '../utils/stores/useGameStore';
import StatusButtons from './StatusButtons';

function StatusBar() {
  const { isWon, isLost } = useGameStore((state) => state.game);

  return (
    <div className="status-bar">
      <ul>
        <li>{`Won: ${isWon}`}</li>
        <li>{`Lost: ${isLost}`}</li>
        <StatusButtons />
      </ul>
    </div>
  );
}

export default StatusBar;
