import useTileStore from './stores/useTileStore';

function checkOnClick(index) {
  const tiles = useTileStore.getState();
  const tile = tiles.tiles;
  const tileNumber = Number(index);
  const rightIndex = [7, 15, 23, 31, 39, 47, 55, 63];
  const leftIndex = [0, 8, 16, 24, 32, 40, 48, 56];
  let tileIndicatorNumber = 0;
  // a tile cant be a mine and have a number.

  function leftColumn() {
    if (tileNumber - 8 >= 0 && tile[tileNumber - 8].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber + 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tileNumber + 8 <= 63 && tile[tileNumber + 8].isMine) {
      tileIndicatorNumber += 1;
    }
  }

  function rightColumn() {
    if (tileNumber - 8 >= 0 && tile[tileNumber - 8].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber - 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tileNumber + 8 <= 63 && tile[tileNumber + 8].isMine) {
      tileIndicatorNumber += 1;
    }
  }

  function middleColumns() {
    if (tileNumber - 8 >= 0 && tile[tileNumber - 8].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber - 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber + 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tileNumber + 8 <= 63 && tile[tileNumber + 8].isMine) {
      tileIndicatorNumber += 1;
    }
  }

  if (leftIndex.includes(tileNumber)) {
    leftColumn();
  } else if (rightIndex.includes(tileNumber)) {
    rightColumn();
  } else {
    middleColumns();
  }
  return tileIndicatorNumber;
}

export default checkOnClick;
