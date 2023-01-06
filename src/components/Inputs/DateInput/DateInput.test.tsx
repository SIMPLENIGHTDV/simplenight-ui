/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render } from '@testing-library/react';
import DateInput from './DateInput';

describe('PasswordInput', () => {
  test('Renders the date input component', () => {
    render(
      <DateInput
        value="value"
        placeholder="placeholder"
        onClick={(e) => e}
        isOpen={false}
      />,
    );
  });
});
