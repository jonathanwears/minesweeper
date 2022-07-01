import useTileStore from './stores/useTileStore';

function checkOnClick(index) {
  const tiles = useTileStore.getState();
  const tile = tiles.tiles;
  const tileNumber = Number(index);
  const leftIndex = [0, 4, 8, 12];
  const rightIndex = [3, 7, 11, 15];
  let tileIndicatorNumber = 0;
  // a tile cant be a mine and have a number.

  function leftColumn() {
    if (tileNumber - 4 >= 0 && tile[tileNumber - 4].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber + 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tileNumber + 4 <= 15 && tile[tileNumber + 4].isMine) {
      tileIndicatorNumber += 1;
    }
  }

  function rightColumn() {
    if (tileNumber - 4 >= 0 && tile[tileNumber - 4].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber - 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tileNumber + 4 <= 15 && tile[tileNumber + 4].isMine) {
      tileIndicatorNumber += 1;
    }
  }

  function middleColumns() {
    if (tileNumber - 4 >= 0 && tile[tileNumber - 4].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber - 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tile[tileNumber + 1].isMine) {
      tileIndicatorNumber += 1;
    }
    if (tileNumber + 4 <= 15 && tile[tileNumber + 4].isMine) {
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
