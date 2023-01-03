import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
  test('Renders the paragraph component', () => {
    render(
      <Paragraph size="medium" fontWeight="normal">
        Test
      </Paragraph>,
    );
  });
});
