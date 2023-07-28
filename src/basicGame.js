function basicGame() {
  const arr = [];
  const ARR_LENGTH = 64;

  for (let i = 0; i <= ARR_LENGTH; i++) {
    arr.push(
      {
        isFlagged: false,
        isMine: false,
        isClicked: false,
      },
    );
  }

  arr[0].isMine = true;
  arr[5].isMine = true;
  arr[7].isMine = true;
  arr[24].isMine = true;
  arr[21].isMine = true;
  arr[34].isMine = true;
  arr[40].isMine = true;
  arr[47].isMine = true;
  arr[56].isMine = true;
  arr[63].isMine = true;

  return arr;
}
export default basicGame;
