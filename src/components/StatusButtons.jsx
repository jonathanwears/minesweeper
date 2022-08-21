import React from 'react';
import useGameStore from '../utils/stores/useGameStore';
import useTileStore from '../utils/stores/useTileStore';
import CreateGame from '../utils/CreateGame';

// reset and start game from this component

function StatusButtons() {
  const { tiles, createTiles, updateTiles } = useTileStore((state) => state);
  const TILE_NUMBER = 16;

  function handleResetGame() {

  }

  function handleStartGame() {
    const newTiles = CreateGame(TILE_NUMBER);
    createTiles(newTiles);
  }

  return (
    <>
      <button type="button" onClick={handleStartGame}>Start Game</button>
      <button type="button" onClick={handleResetGame}>Reset</button>
    </>
  );
}

export default StatusButtons;
