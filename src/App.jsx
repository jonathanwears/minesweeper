/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import StatusBar from './pages/StatusBar';
import GameBoard from './pages/GameBoard';

function App() {
  return (
    <div className="bg-white w-full h-screen m-0 grid grid-rows-1 grid-cols-3  ">
      <div className=" grid grid-rows-1">
        <StatusBar />
      </div>
      <div className="grid-rows-2 col-span-2 justify-center items-center flex flex-col">
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
