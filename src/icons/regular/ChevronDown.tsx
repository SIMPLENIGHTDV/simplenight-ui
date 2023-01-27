import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#chevron-down_svg__a)">
      <path
        d="M9.982 11.025 6.198 7.24a.833.833 0 1 0-1.175 1.184L9.39 12.79a.834.834 0 0 0 1.183 0l4.409-4.366a.834.834 0 0 0 .241-.592.833.833 0 0 0-.241-.592.834.834 0 0 0-1.175 0l-3.825 3.784Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="chevron-down_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChevronDown;
