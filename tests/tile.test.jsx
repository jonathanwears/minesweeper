// import React from 'react';
// import { test, expect, describe, beforeAll } from 'vitest';
// import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Tile from '../src/components/Tile';
// import useTileStore from '../src/utils/stores/useTileStore';
// import useGameStore from '../src/utils/stores/useGameStore';
// import StatusBar from '../src/pages/StatusBar';
// import tile from './mockTiles';

// describe('tile', () => {
//   const user = userEvent.setup();
//   beforeAll(() => {
//     useTileStore.setState(
//       {
//         tiles: tile,
//       },
//     );
//     useGameStore.setState(
//       {
//         game: {
//           inProgress: true,
//           isWon: false,
//           isLost: false,
//         },
//       },
//     );
//   });

//   test('tiles are rendered', () => {
//     render(
//       <>
//         <Tile index={0} />
//         <Tile index={1} />
//         <Tile index={2} />

//       </>,
//     );
//     const tile0 = screen.getByLabelText('listItem0');
//     const tile2 = screen.getByLabelText('listItem2');
//     expect(tile0).toBeTruthy();
//     expect(tile2).toBeTruthy();
//   });

//   test('a basic number tile displays a number when click', async () => {
//     render(
//       <>
//         <Tile index={0} />
//         <Tile index={1} />
//         <Tile index={2} />
//       </>,
//     );
//     const tile0 = screen.getByRole('listitem', { name: 'listItem0' });
//     await user.click(tile0);
//     const tileNumber = screen.getByText(/[1]/i);
//     expect(tileNumber).toBeInTheDocument();
//   });

//   test('lost message is displayed when a mine is clicked', async () => {
//     render(
//       <>
//         <Tile index={0} />
//         <Tile index={1} />
//         <Tile index={2} />
//         <StatusBar />
//       </>,
//     );
//     const tile2 = screen.getByRole('listitem', { name: /listItem2/i });
//     await user.click(tile2);
//     const statusMessage = screen.getByText(/aww you lost!/i);
//     expect(statusMessage).toBeInTheDocument();
//   });
// });
