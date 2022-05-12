import create from 'zustand';

const useTileStore = create((set) => ({
  tiles: {},

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
