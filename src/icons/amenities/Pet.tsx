import * as React from 'react';
import { SVGProps } from 'react';
const SvgPet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#pet_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.152 11.274 20 17.642A3.96 3.96 0 0 1 16.845 24h-9.69A3.96 3.96 0 0 1 4 17.642l4.845-6.368a3.96 3.96 0 0 1 6.3 0h.007ZM8 0a2.667 2.667 0 0 1 2.667 2.667V4a2.669 2.669 0 0 1-3.7 2.51A2.667 2.667 0 0 1 5.335 4V2.667A2.667 2.667 0 0 1 8 0ZM2.667 6.667a2.667 2.667 0 0 1 2.667 2.667v1.333a2.667 2.667 0 0 1-5.333 0V9.333a2.667 2.667 0 0 1 2.666-2.666ZM16 0a2.667 2.667 0 0 1 2.667 2.667V4a2.667 2.667 0 0 1-5.333 0V2.667A2.667 2.667 0 0 1 16 0Zm5.333 6.667A2.667 2.667 0 0 1 24 9.333v1.333a2.67 2.67 0 0 1-3.7 2.51 2.666 2.666 0 0 1-1.633-2.51V9.333a2.667 2.667 0 0 1 2.666-2.666Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="pet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPet;
