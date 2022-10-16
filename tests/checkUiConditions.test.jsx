import React from 'react';
import { test, describe, beforeAll, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import useGameStore from '../src/utils/stores/useGameStore';
import useTileStore from '../src/utils/stores/useTileStore';
import Tile from '../src/components/Tile';

describe('test checkUiConditions logic', () => {
  beforeAll(() => {
    useTileStore.setState(
      {
        tiles: [
          {
            isFlagged: false,
            isMine: false,
            isClicked: false,
          },
          {
            isFlagged: false,
            isMine: true,
            isClicked: false,
          },
        ],
      },
    );
    useGameStore.setState(
      {
        game: {
          inProgress: true,
          isWon: false,
          isLost: false,
        },
      },
    );
  });

  test('stores have been created', () => {
    render(
      <>
        <Tile index={0} />
        <Tile index={1} />
      </>,
    );
    const tile1 = screen.getByLabelText('listItem0');
    const tile2 = screen.getByLabelText('listItem1');
    expect(tile1).toBeTruthy();
    expect(tile2).toBeTruthy();
  });

});
