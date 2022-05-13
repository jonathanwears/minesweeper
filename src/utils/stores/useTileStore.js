import create from 'zustand';
import CreateGame from '../CreateGame';

const useTileStore = create((set) => ({
  tiles: { ...CreateGame(16) },

  updateTiles: (id, property, value) => {
    set(({ tiles }) => ({
      tiles: {
        ...tiles,
        [id]: {
          ...tiles[id],
          [property]: value,
        },
      },
    }));
  },

}));

export default useTileStore;
