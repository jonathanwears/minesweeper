/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import checkOnClick from '../utils/checkOnClick';
import checkLostState from '../utils/checkLostState';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import TileUi from './TileUi';

function Tile({ index }) {
  const updateTile = useTileStore((state) => state.updateTiles);
  const tile = useTileStore((state) => state.tiles[index]);
  const unSub1 = useTileStore.subscribe((state) => state.tiles[index]);
  const updateGame = useGameStore((state) => state.updateGame);

  useEffect(() => {
    // use inside tile. check if certain conditions have been met to change game.
    const isLost = checkLostState(index);
    if (isLost) {
      updateGame('isLost', true);
    }
  }, [unSub1]);

  function handleTileLeftClick() {
    updateTile(index, 'isClicked', true);

    if (tile.isMine) return;

    const flagNumber = checkOnClick(index);
    updateTile(index, 'flagNumber', flagNumber);
  }

  function handleTileRightClick(event) {
    event.preventDefault();
    const newValue = !tile.isFlagged;
    updateTile(index, 'isFlagged', newValue);
  }

  return (
    <div>
      <li
        className="tile"
        onContextMenu={handleTileRightClick}
        aria-label={`listItem${index}`}
        onClick={handleTileLeftClick}
      >
        <TileUi index={index} />
        x
      </li>
    </div>
  );
}

export default Tile;
