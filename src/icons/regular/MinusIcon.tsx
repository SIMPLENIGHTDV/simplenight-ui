import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 16 2"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15 0H1a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2Z" fill="currentColor" />
  </svg>
);

export default SvgMinusIcon;
