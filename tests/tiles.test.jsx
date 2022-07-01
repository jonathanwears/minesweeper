import React from 'react';
import { test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from '../src/App';

test('test', () => {
  render(<App />);
  const a = screen.getByLabelText('listItem5').innerHTML;
  expect(a).toBe('0');
});
