/* eslint-disable react/jsx-no-bind */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import useTileStore from '../../utils/stores/useTileStore';
import useGameStore from '../../utils/stores/useGameStore';
import { CreateGame } from '../../utils/CreateGame';
import Button from '../Button';

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
    console.log('reset')
    resetGame();
  }

  function handleStartGame() {
    if (game.inProgress === true) {
      resetGame();
    }
    newGame();
  }

  return (
    <div>
      <Button
        name={!game.inProgress ? 'Start Game' : 'New Game'}
        click={handleStartGame}
      />

      <Button
        name="Reset"
        click={handleResetGame}
      />
    </div>
  );
}

export default StatusButtons;
