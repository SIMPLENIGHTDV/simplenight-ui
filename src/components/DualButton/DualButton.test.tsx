import React from 'react';
import { render } from '@testing-library/react';
import DualButton from './DualButton';

describe('Button', () => {
  test('Renders the button component', () => {
    render(<DualButton />);
  });
});
