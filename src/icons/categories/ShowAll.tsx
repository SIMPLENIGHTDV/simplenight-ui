import * as React from 'react';
import { SVGProps } from 'react';

const SvgShowAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <g data-name="Group 3" fill="currentColor">
      <path
        data-name="Path 6"
        d="M2 8h21a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z"
      />
      <path
        data-name="Path 7"
        d="M5 0h15a1 1 0 0 1 1 1 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z"
      />
      <path
        data-name="Path 8"
        d="M3 4h19a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z"
      />
    </g>
  </svg>
);

export default SvgShowAll;
