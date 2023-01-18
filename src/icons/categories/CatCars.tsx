import * as React from 'react';
import { SVGProps } from 'react';
const SvgCatCars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cat-cars_svg__a)">
      <path
        d="m19 9.5-1.25-3.62A3 3 0 0 0 14.97 4H8.45A3 3 0 0 0 5.5 6.41L4.98 9.5H5a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-3a3 3 0 0 0-3-3ZM13 6h1.97a1 1 0 0 1 .92.63l.95 2.87H13V6Zm-5.54.8a1 1 0 0 1 1-.8H11v3.5H7.02l.44-2.7ZM7 17.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-3h-.78a3 3 0 0 0-4.44 0H9.22a2.999 2.999 0 0 0-4.44 0H4v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="cat-cars_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCatCars;
