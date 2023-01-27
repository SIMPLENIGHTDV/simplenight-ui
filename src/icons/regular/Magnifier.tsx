import * as React from 'react';
import { SVGProps } from 'react';

const SvgMagnifier = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.71 19.29 17 15.61A9 9 0 1 0 15.61 17l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMagnifier;
