/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './App.css';
import useTileStore from './utils/stores/useTileStore';
import Tile from './components/Tile';

function App() {
  const tiles = useTileStore((state) => state.tiles);

  return (
    <div className="App">
      <div className="game-board">
        <ul>
          {Object.keys(tiles).map((tile, index) => <Tile index={index} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
