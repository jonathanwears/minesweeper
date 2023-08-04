import React from 'react';
import classNames from 'classnames';
import StatusBar from './pages/StatusBar';
import GameBoard from './pages/GameBoard';
import useGameStore from './utils/stores/useGameStore';

function App() {
  const { inProgress } = useGameStore((state) => state.game);
  const className = classNames('bg-white w-full h-screen m-0 lg:grid  md:flex md:flex-col', {
    'lg:grid-rows-1 lg:grid-cols-3': inProgress,
  });
  return (
    <div className={className}>
      <div className=" grid grid-rows-1">
        <StatusBar />
      </div>
      <GameBoard />
    </div>
  );
}

export default App;
