import create from 'zustand';
import CreateGame from '../CreateGame';

const useTileStore = create((set) => ({
  tiles: { ...CreateGame(16) },

  initTiles: (tile, id) => {
    set(({ tiles }) => ({
      tiles: {
        ...tiles,
        [id]: {
          tile,
        },
      },
    }));
  },

  updateTiles: (id, property, value) => {
    set(({ tiles, values }) => ({
      tiles: {
        ...tiles,
        [id]: {
          ...values,
          [property]: value,
        },
      },
    }));
  },
}));

export default useTileStore;
