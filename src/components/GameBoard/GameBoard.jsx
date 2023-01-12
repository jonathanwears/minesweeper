import React, { useEffect } from 'react';
import useTileStore from '../../utils/stores/useTileStore';
import useGameStore from '../../utils/stores/useGameStore';
import Tile from '../Tile/Tile';
import checkWin from '../../utils/checkWIn';

function GameBoard() {
  const tiles = useTileStore((state) => state.tiles);
  const updateGame = useGameStore((state) => state.updateGame);

  const values = Object.values(tiles);

  useEffect(() => {
    const isWin = checkWin(values);
    if (isWin) updateGame('isWon', true);
  }, [tiles]);

  useEffect(() => {
    const lost = values.some((x) => x.isClicked && x.isMine === true);
    if (lost) {
      updateGame('isLost', true);
    }
  }, [tiles]);

  return (
    <div className="game-board">
      <ul>
        {Object.keys(tiles).map((index) => <Tile key={index} index={index} />)}
      </ul>
    </div>
  );
}

export default GameBoard;
