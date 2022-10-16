import useTileStore from './stores/useTileStore';
import useGameStore from './stores/useGameStore';
import checkOnClick from './checkOnClick';

function checkUiConditions(index) {
  const { isMine, isClicked } = useTileStore.getState().tiles[index];
  const { isWon, isLost } = useGameStore.getState().game;

  const conditions = {
    reveal: false,
    ui: '', // mine, flagged, clicked, default
    tileMineNum: '',
  };

  if (isLost || isWon) {
    return conditions;
  }

  if (!isClicked) {
    if (conditions.ui !== 'default') {
      conditions.ui = 'default';
      conditions.flagged = null;
    }
    return conditions;
  }

  if (isMine) {
    conditions.ui = 'mine';
    return conditions;
  }

  // default if no other conditions are met. isClicked should always be true.
  if (isClicked) {
    conditions.ui = 'clicked';
    conditions.tileMineNum = checkOnClick(index);
    return conditions;
  }

  return null;
}

export default checkUiConditions;
