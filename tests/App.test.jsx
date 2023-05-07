import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';

describe('App', () => {
  const user = userEvent.setup();

  test(('Start game and click a tile'), async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /Start/i });
    await user.click(startButton);

    const firstTile = screen.getByRole('listitem', { name: /\listItem0\b/i });
    await user.click(firstTile);

    const condition = screen.queryByText(/aww you lost!/i);

    if (condition) {
      const lostMessage = screen.getByText(/aww you lost!/i);
      expect(lostMessage).toBeInTheDocument();
      console.log('lost was found')
    } else {
      console.log('the else ran')
      const tileNumber2 = screen.queryByText('2');
      const tileNumber1 = screen.queryByText('1');
      const tileNumber3 = screen.queryByText('3');
      const tileNumber0 = screen.queryByText('0');
      const tileNumber4 = screen.queryByText('4');
    }
  });
});
