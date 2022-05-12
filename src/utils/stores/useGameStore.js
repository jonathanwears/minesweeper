import create from 'zustand';

const useGameStore = create((set) => ({
  game: {
    isWon: false,
    isLost: false,
  },

  updateGame: (property, value) => {
    set(({ tiles }) => ({
      game: {
        ...tiles,
        [property]: value,
      },
    }));
  },
}));

export default useGameStore;
