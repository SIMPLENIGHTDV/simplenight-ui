/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  test('Renders the search input component', () => {
    render(
      <SearchInput value="value" onChange={(e) => e} onClear={() => {}} />,
    );
  });
});
