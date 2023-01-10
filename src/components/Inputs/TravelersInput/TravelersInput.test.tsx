/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render } from '@testing-library/react';
import TravelersInput from './TravelersInput';

describe('PasswordInput', () => {
  test('Renders the date input component', () => {
    render(
      <TravelersInput
        value="value"
        placeholder="placeholder"
        onClick={(e) => e}
        isOpen={false}
      />,
    );
  });
});
