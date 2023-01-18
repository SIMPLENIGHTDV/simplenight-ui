import * as React from 'react';
import { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 8.167H9.833V4.833a.833.833 0 0 0-1.666 0V9A.833.833 0 0 0 9 9.833h2.5a.833.833 0 0 0 0-1.666ZM9 .667a8.333 8.333 0 1 0 0 16.666A8.333 8.333 0 0 0 9 .667Zm0 15A6.666 6.666 0 1 1 9 2.334a6.666 6.666 0 0 1 0 13.333Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClock;
