function CreateGame(grid) {
  const MINES_COUNT = 5;
  const GRID_SIZE = grid || 5;

  const game = new Array(grid)
    .fill()
    .map(() => {
      const tile = {
        name: 'tile',
        type: 'tile',
        isFlagged: false,
        isMine: false,
      };
      return tile;
    });

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
