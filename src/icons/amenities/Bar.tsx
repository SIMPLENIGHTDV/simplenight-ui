import * as React from 'react';
import { SVGProps } from 'react';

const SvgBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#bar_svg__a)">
      <path
        d="M5.5 0a3.5 3.5 0 1 0 0 7 .827.827 0 0 1 .557.387l5.667 8.5c.181.272.278.591.277.918v4.697a.5.5 0 0 1-.5.5h-3.5a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-3.5a.5.5 0 0 1-.5-.5v-4.7c0-.325.096-.644.277-.916l7.557-11.332A1 1 0 0 0 21 3H9.45a.675.675 0 0 1-.608-.487A3.5 3.5 0 0 0 5.501 0Zm0 2A1.5 1.5 0 1 1 4 3.5 1.485 1.485 0 0 1 5.5 2Zm3.345 3h9.786a.268.268 0 0 1 .223.417l-2.778 4.167a.935.935 0 0 1-.778.417h-4.597a.933.933 0 0 1-.777-.417L7.789 6.38a.233.233 0 0 1 .045-.296c.289-.26.533-.566.722-.906A.368.368 0 0 1 8.845 5Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="bar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBar;
