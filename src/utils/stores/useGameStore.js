import create from 'zustand';

const useGameStore = create((set) => ({
  game: {
    inProgress: false,
    isWon: false,
    isLost: false,
  },

  updateGame: (property, value) => {
    set(({ game }) => ({
      game: {
        ...game,
        [property]: value,
      },
    }));
  },
}));

export default useGameStore;
