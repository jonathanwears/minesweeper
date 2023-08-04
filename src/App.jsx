import React from 'react';
import StatusBar from './pages/StatusBar';
import GameBoard from './pages/GameBoard';

function App() {
  return (
    <div className="bg-white w-full h-screen m-0 lg:grid lg:grid-rows-1 lg:grid-cols-3 md:flex md:flex-col ">
      <div className=" grid grid-rows-1">
        <StatusBar />
      </div>
      <GameBoard />
    </div>
  );
}

export default App;
