import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  test('Renders the text input component', () => {
    render(<TextInput />);
  });
});
