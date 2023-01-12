import React, { useEffect, useState } from 'react';
import './tile-ui.css';
import FlagIcon from '../../icons/FlagIcon';
import useTileStore from '../../utils/stores/useTileStore';
import checkUiConditions from '../../utils/checkUiConditions';
import Display from './Display';

function TileUi({ index }) {
  const { isFlagged, isClicked, isMine } = useTileStore((state) => state.tiles[index]);
  const [display, setDisplay] = useState(null);
  const [style, setStyle] = useState('tile-ui-default');

  useEffect(() => {
    const conditions = checkUiConditions(index);
    setDisplay(conditions.tileMineNum);
    setStyle(`tile-ui-${conditions.ui}`);
  }, [isClicked]);

  const numDisplay = (!isMine && isClicked) ? <Display display={display} /> : null;
  const flagDisplay = (isFlagged && !isClicked) ? <FlagIcon /> : null;

  return (
    <div className={style}>
      {numDisplay}
      {flagDisplay}
    </div>
  );
}

export default TileUi;
