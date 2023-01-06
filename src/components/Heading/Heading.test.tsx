import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  test('Renders the heading component', () => {
    render(<Heading tag="h1">Test</Heading>);
  });
});
