import create from 'zustand';

const useTileStore = create((set) => ({
  tiles: {},

  createTiles: (game) => {
    set({ tiles: { ...game } });
  },

  clearTiles: () => {
    set({ tiles: {} });
  },

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
