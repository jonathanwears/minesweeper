/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import CreateGame from '../utils/CreateGame';

// reset and start game from this component

function StatusButtons() {
  const { tiles, createTiles, updateTiles } = useTileStore((state) => state);
  const { game, updateGame } = useGameStore((state) => state);

  function resetGame() {
    const a = tiles;
    for (const tile in a) {
      updateTiles(tile, 'isClicked', false);
      updateTiles(tile, 'isFlagged', false);
      updateTiles(tile, 'isRevealed', false);
    }
    updateGame('isWon', false);
    updateGame('isLost', false);
  }

  function newGame() {
    updateGame('inProgress', true);
    const newTiles = CreateGame();
    createTiles(newTiles);
  }

  function handleResetGame() {
    resetGame();
  }

  function handleStartGame() {
    if (game.inProgress === true) {
      resetGame();
    }
    newGame();
  }

  return (
    <>
      <button type="button" aria-label="startButton" onClick={handleStartGame}>{!game.inProgress ? 'Start Game' : 'New Game'}</button>
      <button type="button" aria-label="resetButton" onClick={handleResetGame}>Reset</button>
    </>
  );
}

export default StatusButtons;
