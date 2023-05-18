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

export default arr;
