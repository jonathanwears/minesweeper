import React, { useEffect } from 'react';
import useTileStore from '../utils/stores/useTileStore';
import useGameStore from '../utils/stores/useGameStore';
import Tile from '../components/Tile';
import checkWin from '../utils/checkWIn';

function GameBoard({ add }) {
  const tiles = useTileStore((state) => state.tiles);
  const updateGame = useGameStore((state) => state.updateGame);
  const inProgress = useGameStore((state) => state.game.inProgress);

  useEffect(() => {
    const values = Object.values(tiles);
    const winnner = checkWin(values);
    if (winnner) updateGame('isWon', true);
  }, [tiles]);

  const board = inProgress ? (
    <div className="grid-rows-2 col-span-2 justify-center items-center flex flex-col">
      <div className="grid w-96 h-96 lg:w-3/5 lg:h-4/5 lg:max-w-7xl grid-cols-8 grid-rows-8 border-2 border-violet-200 shadow-lg m-2">
        {Object.keys(tiles).map((index) => (
          <Tile
            key={index}
            index={index}
            add={add}
          />
        ))}
      </div>
    </div>
  ) : null;

  return board;
}

export default GameBoard;
