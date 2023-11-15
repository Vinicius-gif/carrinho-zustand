// Import necessary dependencies
import React from 'react';
import { render } from '@testing-library/react';
import Products from '.';

describe('Products Component', () => {
  it('renders without crashing', () => {
    render(<Products />);
  });
});
