import React from 'react';
import { render } from '@testing-library/react';
import Disclaimer from './Disclaimer';
import { InfoCircle } from '../../icons';

describe('Disclaimer', () => {
  test('Renders the disclaimer component', () => {
    render(<Disclaimer message="test" icon={<InfoCircle className="h-5" />} />);
  });
});
