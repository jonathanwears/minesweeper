import React, { useEffect, useState } from 'react';
import './tile-ui.css';
import FlagIcon from '../icons/FlagIcon';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';

function TileUi({ index }) {
  const { isFlagged, isMine, isClicked, flagNumber } = useTileStore((state) => state.tiles[index]);
  const { isWon, isLost } = useGameStore((state) => state.game);
  const [display, setDisplay] = useState(null);
  const [style, setStyle] = useState('tile-ui');

  useEffect(() => {
    if (isClicked && isMine) {
      setStyle('tile-ui-mine');
    } else if (isClicked) {
      setStyle('tile-ui-clicked');
    }
  }, [isClicked, isMine]);

  useEffect(() => {
    if (isLost || isWon) {
      setDisplay(null);
      return;
    }

    if (isFlagged) {
      setDisplay(null);
    }

    if (isClicked && !isMine && !isFlagged && (flagNumber !== 0)) {
      setDisplay(flagNumber);
    }
  }, [isClicked, isFlagged]);

  return (
    <div className={style}>
      <p>{display}</p>
      {isFlagged && !isClicked && <FlagIcon />}
    </div>
  );
}

export default TileUi;
