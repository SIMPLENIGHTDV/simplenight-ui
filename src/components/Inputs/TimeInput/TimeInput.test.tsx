import React from 'react';
import { render } from '@testing-library/react';
import TimeInput from './TimeInput';

const selectOptions = [
  { value: '0200', label: '02:00 AM' },
  { value: '0300', label: '03:00 AM' },
  { value: '0400', label: '04:00 AM' },
  { value: '0500', label: '05:00 AM' },
  { value: '0600', label: '06:00 PM' },
];

describe('TimeInput', () => {
  test('Renders the time input component', () => {
    render(<TimeInput options={selectOptions} onChange={(e) => e} />);
  });
});
