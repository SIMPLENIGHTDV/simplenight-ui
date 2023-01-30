import * as React from 'react';
import { SVGProps } from 'react';

const SvgCatDiscover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cat-discover_svg__a)" fill="currentColor">
      <rect x={5} y={1.5} width={14} height={2} rx={1} />
      <rect x={3} y={4.5} width={18} height={2} rx={1} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 10.5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-9Zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H4Z"
      />
    </g>
    <defs>
      <clipPath id="cat-discover_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCatDiscover;
