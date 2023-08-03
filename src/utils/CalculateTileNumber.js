/* eslint-disable consistent-return */
import useTileStore from './stores/useTileStore';
import useGameStore from './stores/useGameStore';
import checkOnClick from './checkOnClick';

function CalculateTileNumber(index) {
  const { isClicked } = useTileStore.getState().tiles[index];
  const { isWon, isLost } = useGameStore.getState().game;

  if (isLost || isWon || !isClicked) {
    return;
  }

  const tileNumber = checkOnClick(index);

  return tileNumber;
}

export default CalculateTileNumber;
