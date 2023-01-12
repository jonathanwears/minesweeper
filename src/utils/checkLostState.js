import useTileStore from './stores/useTileStore';

function checkLostState(index) {
  const tile = useTileStore.getState().tiles[index];

  if (tile.isClicked && tile.isMine) {
    return true;
  }
  return false;
}

export default checkLostState;
