import useTileStore from './stores/useTileStore';

function checkLostState(index) {
  const tile = useTileStore.getState().tiles[index];
  let isLost = false;

  if (tile.isClicked && tile.isMine) {
    isLost = true;
  }

  return isLost;
}

export default checkLostState;
