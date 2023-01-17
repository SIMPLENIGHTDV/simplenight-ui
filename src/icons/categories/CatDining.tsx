import * as React from 'react';
import { SVGProps } from 'react';

const SvgCatDining = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cat-dining_svg__a)">
      <path
        d="M16.84 11.63a2.998 2.998 0 0 0 2.16-.88l2.83-2.83a1 1 0 1 0-1.42-1.41l-2.86 2.82a1 1 0 0 1-1.42 0l3.54-3.53a1.004 1.004 0 0 0-1.42-1.42l-3.53 3.54a1 1 0 0 1 0-1.41l2.83-2.83a1.004 1.004 0 0 0-1.42-1.42L13.3 5.09a3 3 0 0 0 0 4.24L12 10.62l-8.27-8.3-.1-.06a.71.71 0 0 0-.17-.11l-.18-.07L3.16 2h-.27a.57.57 0 0 0-.18 0 .7.7 0 0 0-.17.09l-.16.1h-.07l-.06.1a1 1 0 0 0-.11.17 1.07 1.07 0 0 0-.07.19v.11a11 11 0 0 0 3.11 9.34l2.64 2.63-5.41 5.4a1 1 0 0 0 .71 1.71.999.999 0 0 0 .71-.29l6.07-5.98 2.83-2.83 2-2a3 3 0 0 0 2.11.89Zm-7.65 1.82-2.63-2.64A9.06 9.06 0 0 1 4 5.4l6.61 6.6-1.42 1.45Zm6.24.57A1.008 1.008 0 0 0 14 15.44l6.3 6.3a1 1 0 0 0 .7.26.998.998 0 0 0 .71-1.71l-6.28-6.27Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="cat-dining_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCatDining;
