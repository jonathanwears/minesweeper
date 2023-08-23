/* eslint-disable react/jsx-no-bind */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import CreateGame from '../utils/CreateGame';
import Button from './Button';
import HandleStoreUpdates from '../utils/HandleStoreUpdates';
// reset and start game from this component

function StatusButtons({ history }) {
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
    history.clear();
  }

  function handleStartGame() {
    if (game.inProgress === true) {
      resetGame();
    }
    newGame();
  }

  function handleBackButton() {
    const index = history.history.at(-1);
    HandleStoreUpdates(index);
    history.remove();
  }

  return (
    <div>
      <Button
        name={game.inProgress ? 'New Game' : 'Start Game'}
        click={handleStartGame}
      />

      <Button
        name="Reset"
        click={handleResetGame}
      />
      {game.inProgress && (
        <Button
          name="Back"
          click={handleBackButton}
        />
      )}
    </div>
  );
}

export default StatusButtons;
