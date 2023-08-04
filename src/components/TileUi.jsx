import React from 'react';
import classNames from 'classnames';
import FlagIcon from '../icons/FlagIcon';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import Display from './Display';

function TileUi({ index, display }) {
  const { isFlagged, isMine, isClicked } = useTileStore((state) => state.tiles[index]);
  const { inProgress } = useGameStore((state) => state.game);

  const className = classNames('flex flex-col justify-center items-center focus:outline-none border focus:ring w-full h-full relative', {
    'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring-violet-900': !isClicked,
    'bg-red-400': isClicked && isMine,
    'bg-violet-600': isClicked && !isMine,
  });

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
