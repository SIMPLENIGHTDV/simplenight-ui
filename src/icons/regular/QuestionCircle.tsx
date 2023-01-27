import * as React from 'react';
import { SVGProps } from 'react';

const SvgQuestionCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.527 10.193a1.06 1.06 0 0 0-.08.1.51.51 0 0 0-.06.12.427.427 0 0 0-.04.12.905.905 0 0 0 0 .134.56.56 0 0 0 .053.253.6.6 0 0 0 .36.36.626.626 0 0 0 .507 0 .6.6 0 0 0 .36-.36.666.666 0 0 0 .04-.253.667.667 0 0 0-1.14-.474ZM8 1.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333Zm0 12A5.334 5.334 0 1 1 8 2.666a5.334 5.334 0 0 1 0 10.667Zm0-8.666a2 2 0 0 0-1.733 1 .667.667 0 1 0 1.153.666.667.667 0 0 1 1.051-.138A.667.667 0 0 1 8 7.333.667.667 0 0 0 7.333 8v.667a.667.667 0 0 0 1.334 0v-.12A2 2 0 0 0 8 4.667Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgQuestionCircle;
