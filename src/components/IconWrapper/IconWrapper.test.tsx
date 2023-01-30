import React from 'react';
import { render } from '@testing-library/react';
import IconWrapper from '.';
import { InfoCircle } from '../../icons';

describe('Disclaimer', () => {
  test('Renders the disclaimer component', () => {
    render(
      <IconWrapper size={32}>
        <InfoCircle className="text-primary-100" />
      </IconWrapper>,
    );
  });
});
