import useTileStore from './stores/useTileStore';

function TileNumber(index) {
  if (index === undefined) return;

  const position = Number(index);
  const tiles = useTileStore.getState();
  const tile = tiles.tiles;

  let tileIndicatorNumber = 0;
  let indexes = [];

  if (position % 8 === 0) {
    indexes = [-8, -7, 1, 8, 9];
  } else if ((position - 7) % 8 === 0) {
    indexes = [-9, -8, -1, 7, 8];
  } else {
    indexes = [-9, -8, -7, -1, 1, 7, 8, 9];
  }

  indexes.forEach((i) => {
    const newPosition = position + i;
    if (newPosition >= 0 && newPosition <= (64 - 1) && tile[newPosition].isMine) {
      tileIndicatorNumber += 1;
    }
  });
  return tileIndicatorNumber;
}

export default TileNumber;
