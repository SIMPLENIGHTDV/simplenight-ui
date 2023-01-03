/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render } from '@testing-library/react';
import PriceInput from './PriceInput';

describe('PriceInput', () => {
  test('Renders the price input component', () => {
    render(<PriceInput currency="usd" value="value" onChange={(e) => e} />);
  });
});
