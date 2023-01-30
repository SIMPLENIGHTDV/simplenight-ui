import * as React from 'react';
import { SVGProps } from 'react';

const SvgMultiplePersons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.25 10.183a4.098 4.098 0 0 0 1.417-3.1 4.167 4.167 0 0 0-8.334 0 4.1 4.1 0 0 0 1.417 3.1A6.667 6.667 0 0 0 .833 16.25a.833.833 0 0 0 1.667 0 5 5 0 1 1 10 0 .833.833 0 0 0 1.667 0 6.667 6.667 0 0 0-3.917-6.067Zm-2.75-.6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm8.117.267A4.166 4.166 0 0 0 12.5 2.917a.833.833 0 1 0 0 1.666 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-1.25 2.159.834.834 0 0 0-.042 1.416l.325.217.109.058a5.834 5.834 0 0 1 3.333 5.317.833.833 0 0 0 1.667 0 7.5 7.5 0 0 0-3.525-6.4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMultiplePersons;
