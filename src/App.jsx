/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './App.css';
import CreateGame from './utils/CreateGame';
import Tile from './components/Tile';

function App() {
  const game = CreateGame(16);

  return (
    <div className="App">
      <div className="game-board">
        {game.map((tile) => <Tile tile={tile} />)}
      </div>
    </div>
  );
}

export default App;
