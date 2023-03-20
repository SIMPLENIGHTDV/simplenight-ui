import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from './Tooltip';
import { QuestionCircle } from '@/icons';

const tooltipText =
  'The taxes are tax recovery charges Simplenight pays to its vendors (e.g. hotels); for details, please see our Terms of Use. We retain our service fees as compensation in servicing your travel reservation.';
describe('Paragraph', () => {
  test('Renders the tooltip component', () => {
    render(
      <Tooltip text={tooltipText} position="top-center">
        <QuestionCircle className="text-dark-700" />
      </Tooltip>,
    );
  });
});
