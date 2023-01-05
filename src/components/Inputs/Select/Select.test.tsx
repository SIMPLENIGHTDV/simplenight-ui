/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render } from '@testing-library/react';
import Select from './Select';

const selectOptions = [
  { value: '0200', label: '02:00 AM' },
  { value: '0300', label: '03:00 AM' },
  { value: '0400', label: '04:00 AM' },
  { value: '0500', label: '05:00 AM' },
  { value: '0600', label: '06:00 PM' }];

describe('Select', () => {
  test('Renders the text input component', () => {
    render(<Select options={selectOptions} onChange={(e) => e} />);
  });
});
