/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './App.css';
import StatusBar from './pages/StatusBar';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  return (
    <div className="App">
      <StatusBar />
      <GameBoard />
    </div>
  );
}

export default App;
