import * as React from 'react';
import { SVGProps } from 'react';

const SvgHamburgerMenuButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 2h18a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2Zm18 8H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H1a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHamburgerMenuButton;
