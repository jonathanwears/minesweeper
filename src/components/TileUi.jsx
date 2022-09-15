import React, { useEffect, useState } from 'react';
import './tile-ui.css';
import FlagIcon from '../icons/FlagIcon';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import checkUiConditions from '../utils/checkUiConditions';

function TileUi({ index }) {
  const { isFlagged, isClicked, isMine } = useTileStore((state) => state.tiles[index]);
  const { updateTiles } = useTileStore((state) => state);
  const { inProgress } = useGameStore((state) => state.game);
  const [display, setDisplay] = useState(null);
  const [style, setStyle] = useState('tile-ui-default');

  useEffect(() => {
    const conditions = checkUiConditions(index);
    if (conditions.display === true) {
      setDisplay(conditions.tileMineNum);
    }
    setStyle(`tile-ui-${conditions.ui}`);
    updateTiles(index, 'isFlagged', conditions.flagged);
  }, [isClicked]);

  return (
    <div className={style}>
      <p>{!isMine && inProgress && isClicked && display}</p>
      {isFlagged && !isClicked && <FlagIcon />}
    </div>
  );
}

export default TileUi;
