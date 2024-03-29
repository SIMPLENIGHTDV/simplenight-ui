import * as React from 'react';
import { SVGProps } from 'react';
const SvgCatThings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cat-things_svg__a)">
      <path
        d="M13 10h-2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Zm5 0a4 4 0 0 0-3-3.86V5a3 3 0 0 0-6 0v1.14A4 4 0 0 0 6 10a4 4 0 0 0-4 4v3a3 3 0 0 0 3 3h1.18A3 3 0 0 0 9 22h6a3 3 0 0 0 2.82-2H19a3 3 0 0 0 3-3v-3a4 4 0 0 0-4-4ZM6 18H5a1 1 0 0 1-1-1v-3a2 2 0 0 1 2-2v6Zm5-13a1 1 0 0 1 2 0v1h-2V5Zm5 14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1Zm0-4.44a3.91 3.91 0 0 0-2-.56h-4a3.91 3.91 0 0 0-2 .56V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4.56ZM20 17a1 1 0 0 1-1 1h-1v-6a2 2 0 0 1 2 2v3Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="cat-things_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCatThings;
