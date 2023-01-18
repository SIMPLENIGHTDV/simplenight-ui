import * as React from 'react';
import { SVGProps } from 'react';
const SvgXCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.71 7.29a1 1 0 0 0-1.42 0L11 9.59l-2.29-2.3a1.004 1.004 0 0 0-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.29-2.3 2.29 2.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L12.41 11l2.3-2.29a1 1 0 0 0 0-1.42Zm3.36-3.36A10 10 0 1 0 3.93 18.07 10 10 0 1 0 18.07 3.93Zm-1.41 12.73A8 8 0 1 1 19 11a7.949 7.949 0 0 1-2.34 5.66Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgXCircle;
