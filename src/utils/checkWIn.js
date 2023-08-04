function checkWin(values) {
  /* check if all regualar tiles are clicked and all mines are flagged.
      each tile controls loss conditions
  */
  let isWin = false;

  if (values.length !== 0) {
    const isMinesClicked = values.filter((value) => value.isMine === false)
      .every((tile) => tile.isClicked);
    const isMinesFlagged = values.filter((value) => value.isMine)
      .every((tile) => tile.isFlagged);

    if (isMinesClicked && isMinesFlagged) isWin = true;
  }

  return isWin;
}

export default checkWin;
