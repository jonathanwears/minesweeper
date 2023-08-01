import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import FlagIcon from '../icons/FlagIcon';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import checkUiConditions from '../utils/checkUiConditions';
import Display from './Display';

function TileUi({ index }) {
  const { isFlagged, isClicked, isMine } = useTileStore((state) => state.tiles[index]);
  const { updateTiles } = useTileStore((state) => state);
  const { inProgress } = useGameStore((state) => state.game);
  const [display, setDisplay] = useState(null);

  const className = classNames('flex flex-col justify-center items-center focus:outline-none border focus:ring w-full h-full relative', {
    'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring-violet-900': !isClicked,
    'bg-red-400': isClicked && isMine,
    'bg-violet-600': isClicked && !isMine,
  });

  useEffect(() => {
    const conditions = checkUiConditions(index);
    setDisplay(conditions.tileMineNum);
    updateTiles(index, 'isFlagged', conditions.flagged);
  }, [isClicked]);

  const numDisplay = (!isMine && inProgress && isClicked) ? <Display display={display} /> : null;
  const flagDisplay = (isFlagged && !isClicked) ? <FlagIcon /> : null;

  return (
    <div className={className}>
      {numDisplay}
      {flagDisplay}
    </div>
  );
}

export default TileUi;
