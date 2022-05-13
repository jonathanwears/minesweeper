import React, { useEffect, useState } from 'react';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';

function TileUi({ index }) {
  const { isFlagged, isMine, isClicked } = useTileStore((state) => state.tiles[index]);
  const { isWon, isLost } = useGameStore((state) => state);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    if (isLost || isWon) {
      setDisplay(null);
    }

    if (isFlagged) {
      setDisplay('Flag');
    }

    if (isClicked && !isMine) {
      setDisplay('Clicked');
    }
  }, [isClicked, isFlagged]);

  return (
    <p>{display}</p>
  );
}

export default TileUi;
