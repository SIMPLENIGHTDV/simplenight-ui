import * as React from 'react';
import { SVGProps } from 'react';
const SvgCash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 4.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.333Zm8 0a.667.667 0 1 0 0 1.335.667.667 0 0 0 0-1.335Zm1.333-4H2.667a2 2 0 0 0-2 2v5.334a2 2 0 0 0 2 2h10.666a2 2 0 0 0 2-2V2.334a2 2 0 0 0-2-2ZM14 7.667a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 7.667V2.334a.667.667 0 0 1 .667-.667h10.666a.667.667 0 0 1 .667.666v5.334ZM8 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 2.667a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCash;
