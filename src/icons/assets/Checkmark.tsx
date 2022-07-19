import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.71 7.21a.999.999 0 0 0-1.42 0l-7.45 7.46-3.13-3.14a1.024 1.024 0 0 0-1.445.025A1.022 1.022 0 0 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a.999.999 0 0 0 0-1.47Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheckmark;
