import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 21 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 0h-14a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm-14 2h14a1 1 0 0 1 1 1l-8 4.88L2.5 3a1 1 0 0 1 1-1Zm15 11a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V5.28l7.48 4.57a1 1 0 0 0 1 0l7.52-4.57V13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEmail;
