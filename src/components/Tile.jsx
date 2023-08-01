/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import checkLostState from '../utils/checkLostState';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import TileUi from './TileUi';

function Tile({ index }) {
  const updateTile = useTileStore((state) => state.updateTiles);
  const tile = useTileStore((state) => state.tiles[index]);
  const unSub1 = useTileStore.subscribe((state) => state.tiles[index]);
  const updateGame = useGameStore((state) => state.updateGame);
  const { isWon, isLost } = useGameStore.getState().game;

  useEffect(() => {
    // use inside tile. check if certain conditions have been met to change game.
    const isLoss = checkLostState(index);
    if (isLoss) {
      updateGame('isLost', true);
    }
  }, [unSub1]);

  function handleTileLeftClick() {
    updateTile(index, 'isClicked', true);
  }

  function handleTileRightClick(event) {
    event.preventDefault();
    if (tile.isClicked || isWon || isLost) return;

    const newValue = !tile.isFlagged;
    updateTile(index, 'isFlagged', newValue);
  }

  return (
    <button
      type="button"
      onContextMenu={handleTileRightClick}
      aria-label={`listItem${index}`}
      onClick={handleTileLeftClick}
      alt="listItem{index}"
    >
      <TileUi index={index} />
    </button>

  );
}

export default Tile;
