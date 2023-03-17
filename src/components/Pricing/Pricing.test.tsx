import React from 'react';
import { render } from '@testing-library/react';
import Pricing from './Pricing';

describe('Pricing', () => {
  test('Renders the Pricing component', () => {
    render(
      <Pricing>
        <Pricing.Discount
          totalBeforeDiscount="$1,954.00"
          percentageToApply="15%"
        />
        <Pricing.Total totalAmount="US$199.00" />
        <Pricing.TotalWithTaxes totalAmount="US$300.00" />
        <Pricing.TaxesAndFees />
      </Pricing>,
    );
  });
});
