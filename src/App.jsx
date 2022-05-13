/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { v4 as id } from 'uuid';
import './App.css';
import useTileStore from './utils/stores/useTileStore';
import Tile from './components/Tile';
import StatusBar from './components/StatusBar';

function App() {
  const tiles = useTileStore((state) => state.tiles);

  return (
    <div className="App">
      <StatusBar />
      <div className="game-board">
        <ul>
          {Object.keys(tiles).map((index) => <Tile key={id()} index={index} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
