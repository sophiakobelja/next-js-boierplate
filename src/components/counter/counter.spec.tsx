/**
 * @jest-environment jsdom
 */

// test/pages/index.test.js

import React from 'react';
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, fireEvent } from '@test/test-utils';
import { Counter } from './index';

describe('Counter', () => {
  it('should render without crashing', () => {
    const component = render(<Counter />);
    expect(component).toBeDefined();
  });

  it('should initialize count as 0', () => {
    const component = render(<Counter />);
    const count = component.getByTestId('count');
    expect(count.textContent).toBe('0');
  });

  it('should increment count to 1', () => {
    const component = render(<Counter />);
    const incrementButton = component.getByTestId('increment');
    fireEvent.click(incrementButton);
    const count = component.getByTestId('count');
    expect(count.textContent).toBe('1');
  });

  it('should decrement count back to 0', () => {
    const component = render(<Counter />);
    const incrementButton = component.getByTestId('decrement');
    fireEvent.click(incrementButton);
    const count = component.getByTestId('count');
    expect(count.textContent).toBe('0');
  });
});
