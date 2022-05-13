function CreateGame(grid) {
  const MINES_COUNT = 5;
  const GRID_SIZE = grid;

  const game = new Array(grid)
    .fill()
    .map(() => ({
      isFlagged: false,
      isMine: false,
      isClicked: false,
    }));

  let mineCurrentCount = 0;

  while (mineCurrentCount <= MINES_COUNT - 1) {
    const randomNumber = Math.floor(Math.random() * GRID_SIZE);
    if (!game[randomNumber].isMine === true) {
      mineCurrentCount += 1;
      game[randomNumber].isMine = true;
    }
  }
  return game;
}

export default CreateGame;
