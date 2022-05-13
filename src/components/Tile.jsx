/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import useTileStore from '../utils/stores/useTileStore';

function Tile({ index }) {
  const updateTile = useTileStore((state) => state.updateTiles);
  const tile = useTileStore((state) => state.tiles[index]);

  function handleClick() {
    const newValue = !tile.isClicked;
    updateTile(index, 'isClicked', newValue);
  }

  function handleRightClick(event) {
    event.preventDefault();
    const newValue = !tile.isClicked;
    updateTile(index, 'isClicked', newValue);
  }

  return (
    <li
      className="tile"
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {}
      {tile.isClicked && tile.isMine && <p>x</p>}
    </li>
  );
}

export default Tile;
