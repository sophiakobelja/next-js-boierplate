/**
 * @jest-environment jsdom
 */

// test/pages/index.test.js
// Using render and screen from test-utils.js instead of
// @testing-library/react
import React from 'react';
import { render } from '@test/test-utils';
import { Header } from './index';

describe('Test of <HomePage>', () => {
  it('should render without crashing', () => {
    const component = render(<Header />);
    expect(component).toBeDefined();
  });
});
