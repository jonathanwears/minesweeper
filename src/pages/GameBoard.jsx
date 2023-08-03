import React, { useEffect } from 'react';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import Tile from '../components/Tile';
import checkWin from '../utils/checkWIn';

function GameBoard() {
  const tiles = useTileStore((state) => state.tiles);
  const tilesState = useTileStore.getState();
  const updateGame = useGameStore((state) => state.updateGame);
  const inProgress = useGameStore((state) => state.game.inProgress);

  useEffect(() => {
    const values = Object.values(tiles);
    const isWin = checkWin(values);
    if (isWin) updateGame('isWon', true);
  }, [tilesState]);

  const board = inProgress ? (
    <div className="grid w-3/5 h-4/5 grid-cols-8 grid-rows-8 border-2 shadow-lg m-2">
      {Object.keys(tiles).map((index) => <Tile key={index} index={index} />)}
    </div>
  ) : null;

  return board;
}

export default GameBoard;
