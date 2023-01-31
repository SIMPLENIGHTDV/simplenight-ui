import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.473 13.527 12 11.073a6 6 0 1 0-.927.927l2.454 2.453a.667.667 0 0 0 .946 0 .666.666 0 0 0 0-.926ZM7.333 12a4.667 4.667 0 1 1 0-9.333 4.667 4.667 0 0 1 0 9.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;
