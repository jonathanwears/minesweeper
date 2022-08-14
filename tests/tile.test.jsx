import React from 'react';
import { test, expect, describe, vi, afterEach, beforeAll } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Tile from '../src/components/Tile';
import useTileStore from '../src/utils/stores/useTileStore';

describe('test if a mine displays a number', () => {
  beforeAll(() => {
    useTileStore.setState(
      {
        tiles: [
          {
            isFlagged: false,
            isMine: true,
            isClicked: false,
          },
        ],
      },
    );
  });

  render(<Tile index={0} />);
});
