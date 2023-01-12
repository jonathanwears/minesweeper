/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import useTileStore from '../../utils/stores/useTileStore';
import useGameStore from '../../utils/stores/useGameStore';
import TileUi from './TileUi';

function Tile({ index }) {
  const updateTile = useTileStore((state) => state.updateTiles);
  const tile = useTileStore((state) => state.tiles[index]);
  const { isWon, isLost } = useGameStore.getState().game;

  function handleTileLeftClick() {
    if (isWon || isLost) return;
    updateTile(index, 'isClicked', true);
  }

  function handleTileRightClick(event) {
    event.preventDefault();
    if (tile.isClicked || isWon || isLost) return;
    const flag = !tile.isFlagged;
    updateTile(index, 'isFlagged', flag);
  }

  return (
    <li
      className="tile"
      onContextMenu={handleTileRightClick}
      aria-label={`listItem${index}`}
      onClick={handleTileLeftClick}
    >
      <TileUi index={index} />
    </li>
  );
}

export default Tile;
