import * as React from 'react';
import { SVGProps } from 'react';
const SvgExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44L14.44.29a1.05 1.05 0 0 0-.71-.29H6.27a1.05 1.05 0 0 0-.71.29L.29 5.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V6.27a1.05 1.05 0 0 0-.29-.71ZM18 13.31 13.31 18H6.69L2 13.31V6.69L6.69 2h6.62L18 6.69v6.62Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgExclamation;
