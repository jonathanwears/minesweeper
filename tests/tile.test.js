import React from 'react';
import { test, expect, describe, vi, afterEach } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Tile from '../src/components/Tile';

describe('test if a  mine displays a number', () => {
  vi.mock('./useTileStore', () => ({
    isFlagged: false,
    isMine: true,
    isClicked: false,
  }));

  const a = vi.spyOn(tile);
  test('check Mock module', () => (
    expect(a.isMine.toEqual(true))
  ));

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
