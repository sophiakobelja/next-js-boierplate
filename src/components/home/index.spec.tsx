/**
 * @jest-environment jsdom
 */

// test/pages/index.test.js

import React from 'react';
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render } from '@test/test-utils';
import { Home } from './index';

describe('HomePage', () => {
  it('should render without crashing', () => {
    const component = render(<Home />);
    expect(component).toBeDefined();
  });
});
