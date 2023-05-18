/* eslint-disable import/prefer-default-export */
import tileProperties from './tileProperties';

export function CreateGame() {
  const TILE_NUMBER = 64;
  const MINES_COUNT = 15;

  const game = new Array(TILE_NUMBER)
    .fill()
    .map(() => ({
      ...tileProperties,
    }));

  let mineCurrentCount = 0;

  while (mineCurrentCount <= MINES_COUNT - 1) {
    const randomNumber = Math.floor(Math.random() * TILE_NUMBER);
    if (!game[randomNumber].isMine === true) {
      mineCurrentCount += 1;
      game[randomNumber].isMine = true;
    }
  }

  return game;
}
