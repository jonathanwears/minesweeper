/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import StatusBar from './pages/StatusBar';
import GameBoard from './pages/GameBoard';

function App() {
  return (
    <div className="bg-yellow-200">
      <StatusBar />
      <GameBoard />
    </div>
  );
}

export default App;
