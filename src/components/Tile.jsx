import React, { useEffect } from 'react';
import useTileStore from '../utils/stores/useTileStore';
import RandomIds from '../utils/RandomIDs';

function Tile({ tile }) {
  const initTiles = useTileStore((state) => state.initTiles);
  const tiles = useTileStore((state) => state.tiles);
  const id = RandomIds();
  const a = tile;

  useEffect(() => {
    initTiles(a, id);
  }, []);

  return (
    <div className="tile">
      {a.isMine === true && 'x' }
    </div>
  );
}

export default Tile;
