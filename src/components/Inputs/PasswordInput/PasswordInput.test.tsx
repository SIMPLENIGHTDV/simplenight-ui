/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render } from '@testing-library/react';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
  test('Renders the password input component', () => {
    render(<PasswordInput value="value" onChange={(e) => e} />);
  });
});
