import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 9 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5.705 7.044-4.54 4.54a1 1 0 1 0 1.42 1.41l5.24-5.24a1 1 0 0 0 0-1.42l-5.24-5.29a1 1 0 0 0-.71-.29 1 1 0 0 0-.71.29 1 1 0 0 0 0 1.41l4.54 4.59Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrow;
