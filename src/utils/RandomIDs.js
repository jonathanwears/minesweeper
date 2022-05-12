function RandomIds() {
  const randomiser = Math.floor(Math.random() * 20);
  const randomId = (Math.random() * randomiser);
  return randomId;
}

export default RandomIds;
