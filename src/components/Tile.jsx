import React, { useEffect, useState, useRef } from 'react';
import checkLostState from '../utils/checkLostState';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import TileUi from './TileUi';
import TileNumber from '../utils/TileNumber';

function Tile({ index }) {
  const ref = useRef(false);
  const updateTile = useTileStore((state) => state.updateTiles);
  const tile = useTileStore((state) => state.tiles[index]);
  const { isClicked, isFlagged } = useTileStore((state) => state.tiles[index]);
  const updateGame = useGameStore((state) => state.updateGame);
  const { isWon, isLost } = useGameStore.getState().game;
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    if (ref.current === true) {
      const tileNumber = TileNumber(index);
      setDisplay(tileNumber);
    }
    ref.current = true;
  }, [isClicked]);

  useEffect(() => {
    const isLoss = checkLostState(index);
    if (isLoss) {
      updateGame('isLost', true);
    }
  }, [tile]);

  function handleTileLeftClick() {
    if (isLost || isWon) return;
    updateTile(index, 'isClicked', true);
  }

  function handleTileRightClick(event) {
    event.preventDefault();
    if (isClicked || isWon || isLost) return;
    const newValue = !isFlagged;
    updateTile(index, 'isFlagged', newValue);
  }

  return (
    <button
      type="button"
      onContextMenu={handleTileRightClick}
      aria-label={`listItem${index}`}
      onClick={handleTileLeftClick}
    >
      <TileUi
        index={index}
        display={display}
      />
    </button>

  );
}

export default Tile;
