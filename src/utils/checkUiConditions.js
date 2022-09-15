import useTileStore from './stores/useTileStore';
import useGameStore from './stores/useGameStore';
import checkOnClick from './checkOnClick';

function checkUiConditions(index) {
  const { isFlagged, isMine, isClicked } = useTileStore.getState().tiles[index];
  const { isWon, isLost } = useGameStore.getState().game;

  const conditions = {
    reveal: false,
    ui: '', // mine, flagged, clicked, default
    display: false,
    flagged: false,
    tileMineNum: 0,
  };

  if (!isFlagged && !isLost && !isWon && isClicked && !isMine) {
    conditions.ui = 'clicked';
    conditions.display = true;
  } else if (!isFlagged && !isLost && !isWon && isClicked && isMine) {
    conditions.display = null;
    conditions.ui = 'mine';
  } else if (!isFlagged && !isLost && !isWon && !isClicked && isMine) {
    conditions.ui = 'default';
    conditions.display = null;
  }

  if (!isLost && !isWon && isFlagged) {
    conditions.flagged = true;
  } else if (!isFlagged || isWon || isLost) {
    conditions.flagged = false;
  }

  if (conditions.display === true) {
    const tileMineNum = checkOnClick(index);
    conditions.tileMineNum = tileMineNum;
  }

  return conditions;
}

export default checkUiConditions;
