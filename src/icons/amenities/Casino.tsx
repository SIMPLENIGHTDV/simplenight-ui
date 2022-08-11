import * as React from 'react';
import { SVGProps } from 'react';

const SvgCasino = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#casino_svg__a)" fill="currentColor">
      <path d="M9.273 8.932 5.384 7.265a1.593 1.593 0 0 0-2.1.833l-3.156 7.3a1.593 1.593 0 0 0 .833 2.1l7.323 3.156a1.592 1.592 0 0 0 2.1-.833l1.466-3.384-2.5-7.222a3.256 3.256 0 0 0-.077-.283ZM5.36 12.871a1.352 1.352 0 0 1-.707-1.818 1.37 1.37 0 0 1 1.818-.707 1.35 1.35 0 0 1 .707 1.818 1.39 1.39 0 0 1-1.818.707Zm3.687 3.964a1.37 1.37 0 0 1-1.818.707 1.38 1.38 0 0 1 .056-2.548 1.38 1.38 0 0 1 1.055.023 1.39 1.39 0 0 1 .707 1.818ZM23.92 12.619l-2.6-7.55a1.59 1.59 0 0 0-2.02-.985l-7.55 2.6a1.588 1.588 0 0 0-.985 2.02l2.6 7.53a1.589 1.589 0 0 0 2.02.985l7.529-2.605a1.565 1.565 0 0 0 1.006-1.995ZM12.914 9.513a1.27 1.27 0 1 1 1.616.783 1.278 1.278 0 0 1-1.616-.783Zm3.257 5.58a1.27 1.27 0 1 1 .783-1.616 1.237 1.237 0 0 1-.786 1.617l.003-.001Zm1.54-7.247a1.27 1.27 0 1 1 1.616.783 1.238 1.238 0 0 1-1.62-.782l.004-.001Zm3.257 5.58a1.27 1.27 0 1 1 .783-1.616 1.278 1.278 0 0 1-.785 1.617l.002-.001Z" />
    </g>
    <defs>
      <clipPath id="casino_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCasino;
