import * as React from 'react';
import { SVGProps } from 'react';

const SvgBed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.833 10.417a2.5 2.5 0 1 0 0-5.001 2.5 2.5 0 0 0 0 5Zm0-3.334a.833.833 0 1 1 0 1.667.833.833 0 0 1 0-1.667Zm10.834-1.666H10a.833.833 0 0 0-.833.833v5H2.5V4.583a.833.833 0 0 0-1.667 0v10.834a.833.833 0 0 0 1.667 0v-2.5h15v2.5a.833.833 0 0 0 1.667 0v-7.5a2.5 2.5 0 0 0-2.5-2.5Zm.833 5.833h-6.667V7.083h5.834a.833.833 0 0 1 .833.834v3.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBed;
