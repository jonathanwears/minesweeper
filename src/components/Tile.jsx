/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import useTileStore from '../utils/stores/useTileStore';

function Tile({ initialTile, index }) {
  const initTiles = useTileStore((state) => state.initTiles);
  const updateTile = useTileStore((state) => state.updateTiles);
  const tile = useTileStore((state) => state.tiles[index]);

  useEffect(() => {
    initTiles(initialTile, index);
  }, []);

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
      {tile.isClicked && <p>x</p>}
    </li>
  );
}

export default Tile;
