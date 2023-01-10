/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render } from '@testing-library/react';
import TravelersRoomsInput from './TravelersRoomsInput';

const inputValue = { travelers: '1', rooms: '2' };

describe('PasswordInput', () => {
  test('Renders the date input component', () => {
    render(
      <TravelersRoomsInput
        value={inputValue}
        onClick={(e) => e}
        isOpen={false}
      />,
    );
  });
});
