import * as React from 'react';
import { SVGProps } from 'react';

const SvgStarFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.667 5.447A.667.667 0 0 0 13.094 5L9.3 4.447 7.6 1a.667.667 0 0 0-1.2 0L4.7 4.44.907 5a.667.667 0 0 0-.54.453.667.667 0 0 0 .167.667l2.753 2.667-.667 3.786a.667.667 0 0 0 .98.72l3.4-1.78 3.4 1.78c.094.053.2.08.307.08a.666.666 0 0 0 .624-.42.667.667 0 0 0 .036-.373L10.7 8.793l2.754-2.666a.667.667 0 0 0 .213-.68Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStarFilter;
