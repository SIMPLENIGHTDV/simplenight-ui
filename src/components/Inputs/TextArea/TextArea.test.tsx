import React from 'react';
import { render } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
  test('Renders the text input component', () => {
    render(<TextArea value="value" onChange={(e) => e} />);
  });
});
