import React, { useEffect } from 'react';
import useTileStore from '../../utils/stores/useTileStore';
import useGameStore from '../../utils/stores/useGameStore';
import Tile from '../Tile';
import checkWin from '../../utils/checkWIn';

function GameBoard() {
  const tiles = useTileStore((state) => state.tiles);
  const tilesState = useTileStore.getState();
  const updateGame = useGameStore((state) => state.updateGame);

  useEffect(() => {
    const values = Object.values(tiles);
    const isWin = checkWin(values);
    if (isWin) updateGame('isWon', true);
  }, [tilesState]);

  return (
    <div className="game-board">
      <ul>
        {Object.keys(tiles).map((index) => <Tile key={index} index={index} />)}
      </ul>
    </div>
  );
}

export default GameBoard;
