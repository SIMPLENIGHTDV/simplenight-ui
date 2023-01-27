import * as React from 'react';
import { SVGProps } from 'react';

const SvgStarContained = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 21 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 7.67a1 1 0 0 0-.86-.67l-5.69-.83L10.9 1a1 1 0 0 0-1.8 0L6.55 6.16.86 7a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67 5.1 2.67c.14.08.299.12.46.12a1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4A1 1 0 0 0 20 7.67Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStarContained;
