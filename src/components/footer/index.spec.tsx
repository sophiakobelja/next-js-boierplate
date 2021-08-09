/**
 * @jest-environment jsdom
 */

// test/pages/index.test.js

import React from 'react';
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render } from '@test/test-utils';
import { Footer } from './index';

describe('HomePage', () => {
  it('should render without crashing', () => {
    const component = render(<Footer />);
    expect(component).toBeDefined();
  });
});
