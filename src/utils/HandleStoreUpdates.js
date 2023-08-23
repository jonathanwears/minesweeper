import useGameStore from './stores/useGameStore';
import useTileStore from './stores/useTileStore';

function HandleStoreUpdates(index) {
  // using last index to find tile to go back , need to with game too
  const tiles = useTileStore.getState().tiles;
  const game = useGameStore.getState().game;
  const selectedTile = Object.values(tiles).find((tile) => tile.index === index);
  const selectedIndex = Object.values(tiles).findIndex((tile) => tile.index === index);

  if (selectedTile.isClicked || selectedTile.isMine) {
    const newTiles = {
      ...tiles,
    };
    newTiles[selectedIndex] = {
      ...selectedTile,
      isClicked: false,
    };
    useTileStore.setState({
      tiles: {
        ...newTiles,
      },
    });
  }

  if (!selectedTile.isClicked && selectedTile.isFlagged) {
    // isFlagged = false
  }

  if (game.isLost) {
    const newGame = {
      inProgress: true,
      isWon: false,
      isLost: false,
    };

    useGameStore.setState({ game: { ...newGame } });
  }
}

export default HandleStoreUpdates;
