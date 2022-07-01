/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import './App.css';
import useTileStore from './utils/stores/useTileStore';
import useGameStore from './utils/stores/useGameStore';
import Tile from './components/Tile';
import StatusBar from './components/StatusBar';
import checkWin from './utils/checkWIn';

function App() {
  const tiles = useTileStore((state) => state.tiles);
  const tilesState = useTileStore.getState();
  const updateGame = useGameStore((state) => state.updateGame);

  useEffect(() => {
    const values = Object.values(tiles);
    const isWin = checkWin(values);
    if (isWin) updateGame('isWon', true);
  }, [tilesState]);

  return (
    <div className="App">
      <StatusBar />
      <div className="game-board">
        <ul>
          {Object.keys(tiles).map((index) => <Tile key={index} index={index} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
