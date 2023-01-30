import * as React from 'react';
import { SVGProps } from 'react';

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 9.167h-1.667V5.833a.833.833 0 1 0-1.666 0V10a.833.833 0 0 0 .833.833h2.5a.834.834 0 0 0 0-1.666Zm-2.5-7.5a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Zm0 15a6.666 6.666 0 1 1 0-13.333 6.666 6.666 0 0 1 0 13.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClock;
