import React from 'react';
import { test, expect, describe, beforeAll, afterAll } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Tile from '../src/components/Tile';
import useTileStore from '../src/utils/stores/useTileStore';
import useGameStore from '../src/utils/stores/useGameStore';
import StatusBar from '../src/components/StatusBar';

describe.skip('tile', () => {
  beforeAll(() => {
    const arr = new Array(5);
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
            isMine: false,
            isClicked: false,
          },
          {
            isFlagged: false,
            isMine: true,
            isClicked: false,
          },
          ...arr,
          {
            isMine: true,
            isClicked: false,
            isFlagged: false,
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
    render(
      <>
        <Tile index={0} />
        <Tile index={1} />
        <Tile index={2} />
        <StatusBar />
      </>,
    );
  });

  test('if tiles exists in document', () => {
    const tile0 = screen.getByLabelText('listItem0');
    const tile2 = screen.getByLabelText('listItem1');
    expect(tile0).toBeTruthy();
    expect(tile2).toBeTruthy();
  });

  test('expect tile to exist', () => {
    const tile0 = screen.getByLabelText('listItem0');
    expect(tile0).toBeTruthy();
  });

  test('tile displays number when not mine and clicked', () => {
    const tile0 = screen.getByLabelText('listItem0');
    fireEvent.click(tile0);
    expect(tile0.querySelector('p').innerHTML).toMatch(/[1]/);
  });

  test('status is changed to lost when clicking mine', () => {
    const tile2 = screen.getByLabelText('listItem2');
    fireEvent.click(tile2.querySelector('div'));
    const statusMessage = screen.getByText(/aww you lost!/i).innerHTML;
    expect(statusMessage).toMatch(/aww You Lost!/i);
  });
});