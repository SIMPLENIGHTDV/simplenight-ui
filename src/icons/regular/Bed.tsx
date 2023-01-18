import * as React from 'react';
import { SVGProps } from 'react';
const SvgBed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 22 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm13-2h-8a1 1 0 0 0-1 1v6H2v-8a1 1 0 0 0-2 0v13a1 1 0 1 0 2 0v-3h18v3a1 1 0 0 0 2 0v-9a3 3 0 0 0-3-3Zm1 7h-8v-5h7a1 1 0 0 1 1 1v4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBed;
