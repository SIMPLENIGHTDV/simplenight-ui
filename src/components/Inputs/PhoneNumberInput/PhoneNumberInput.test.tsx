import React from 'react';
import { render } from '@testing-library/react';
import PhoneNumberInput from '.';

describe('PhoneNumberInput', () => {
  test('Renders the search input component', () => {
    render(
      <PhoneNumberInput onChange={(e) => e} />,
    );
  });
});
