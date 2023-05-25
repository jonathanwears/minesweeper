import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import * as Game from '../src/utils/CreateGame';
import mockGame from './mockGame';

vi.mock('../src/utils/CreateGame', () => ({
  CreateGame: vi.fn(),
}));

describe('App', () => {
  const user = userEvent.setup();

  test(('Start game and click a mine'), async () => {
    vi.spyOn(Game, 'CreateGame').mockReturnValue(mockGame);
    render(<App />);

    const startButton = screen.getByRole('button', { name: /Start/i });
    await user.click(startButton);

    const firstTile = screen.getByRole('listitem', { name: /\listItem0\b/i });
    await user.click(firstTile);

    const lostMessage = screen.getByText(/aww you lost!/i);
    expect(lostMessage).toBeInTheDocument();
  });
});

/*
if (condition) {
      console.log('lost was found')
  } else {
    console.log('the else ran');

  const condition = screen.queryByText(/aww you lost!/i);
    const tileNumber = screen.queryAllByText(2);
    console.log(tileNumber);
    // expect(tileNumber).toBeGreaterThan(0);
  }
*/
