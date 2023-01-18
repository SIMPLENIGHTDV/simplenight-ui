import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 16 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.71 1.21a.999.999 0 0 0-1.42 0L5.84 8.67 2.71 5.53A1.022 1.022 0 1 0 1.29 7l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCheck;
