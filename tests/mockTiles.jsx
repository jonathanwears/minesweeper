const arr = new Array(5);
const tile = [
  {
    isFlagged: false,
    isMine: false,
    isClicked: false,
  },
  {
    isFlagged: false,
    isMine: false,
    isClicked: false,
  },
  {
    isFlagged: false,
    isMine: true,
    isClicked: false,
  },
  ...arr,
  {
    isMine: true,
    isClicked: false,
    isFlagged: false,
  },
];

export default tile;
