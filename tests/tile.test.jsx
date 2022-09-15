import React from 'react';
import { test, expect, describe, beforeAll } from 'vitest';
import { screen, render, fireEvent, getByLabelText } from '@testing-library/react';
import Tile from '../src/components/Tile';
import useTileStore from '../src/utils/stores/useTileStore';

describe('tile', () => {
  beforeAll(() => {
    useTileStore.setState(
      {
        tiles: [
          {
            isFlagged: false,
            isMine: true,
            isClicked: false,
          },
          {
            isFlagged: false,
            isMine: false,
            isClicked: false,
          },
        ],
      },
    );
  });

  test('if tiles exists in document', () => {
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
