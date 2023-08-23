import { v4 as uuidv4 } from 'uuid';
import tileProperties from './tileProperties';
import basicGame from '../basicGame';

function CreateGame() {
  let board = null;

  function makeGame() {
    const TILE_NUMBER = 64;
    const MINES_COUNT = 15;

    const game = new Array(TILE_NUMBER)
      .fill()
      .map(() => ({
        index: uuidv4(),
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

  if (window.location.href.includes('test')) {
    board = basicGame();
    return board;
  }
  board = makeGame();
  return board;
}

export default CreateGame;
