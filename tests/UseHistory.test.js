import { test, expect, describe } from 'vitest';
import { renderHook } from '@testing-library/react';
import History from '../src/utils/UseHistory';

describe('test useHistory', () => {
  test('history to be initilised', () => {
    const { result } = renderHook(() => History());
    expect(result.current.history).toStrictEqual([]);
  });

  test('add entry to history', () => {
    const { result } = renderHook(() => History());
    result.current.add('a');
    expect(result.current.history).toStrictEqual(['a']);
  });

  test('remove entry from history', () => {
    const { result } = renderHook(() => History(['a']));
    expect(result.current.history).toStrictEqual(['a']);
    result.current.remove();
    expect(result.current.history).toStrictEqual([]);
  });

  test('is history empty', () => {
    const { result } = renderHook(() => History());
    const isEmpty = result.current.isEmpty();
    expect(isEmpty).toBe(true);
  });
});
