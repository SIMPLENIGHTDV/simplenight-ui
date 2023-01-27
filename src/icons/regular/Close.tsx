import * as React from 'react';
import { SVGProps } from 'react';

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.668 12.9 4.3-4.29a1.004 1.004 0 0 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 1 0-1.42 1.42l4.3 4.29-4.3 4.29a1.001 1.001 0 0 0 .326 1.639 1.001 1.001 0 0 0 1.094-.219l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1.002 1.002 0 0 0 0-1.42l-4.3-4.29Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClose;
