import useTileStore from './stores/useTileStore';

function checkOnClick(index) {
  const BOARD_LENGTH = 64;
  const tiles = useTileStore.getState();
  const tile = tiles.tiles;
  const tileNumber = Number(index);

  const basicIndex = new Array(BOARD_LENGTH)
    .fill()
    .map((_, i) => i);

  const leftIndex = basicIndex
    .filter((x) => x % 8 === 0);

  const rightIndex = basicIndex
    .filter((x) => x % 8 === 0)
    .map((x) => x + 7);

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
