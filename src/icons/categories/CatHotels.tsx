import * as React from 'react';
import { SVGProps } from 'react';
const SvgCatHotels = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cat-hotels_svg__a)">
      <path
        d="M7 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm13-2h-8a1 1 0 0 0-1 1v6H3v-8a1 1 0 0 0-2 0v13a1 1 0 1 0 2 0v-3h18v3a1 1 0 0 0 2 0v-9a3 3 0 0 0-3-3Zm1 7h-8v-5h7a1 1 0 0 1 1 1v4Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="cat-hotels_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCatHotels;
