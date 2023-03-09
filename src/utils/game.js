/* eslint-disable import/prefer-default-export */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import useGameStore from './stores/useGameStore';
import useTileStore from './stores/useTileStore';
import CreateGame from './CreateGame';

const tileStore = useTileStore.subscribe({}, (state) => state);
const gameStore = useGameStore.subscribe({}, (state) => state);

export function resetGame() {
  const t = tiles;
  for (const tile in t) {
    updateTiles(tile, 'isClicked', false);
    updateTiles(tile, 'isFlagged', false);
    updateTiles(tile, 'isRevealed', false);
  }
  updateGame('isWon', false);
  updateGame('isLost', false);
}

export function newGame() {
  useGameStore.setState({ game: { inProgress: true } });
  // updateGame('inProgress', true);
  const newTiles = CreateGame();
  tileStore.setState(newTiles);
  // createTiles(newTiles);
}
