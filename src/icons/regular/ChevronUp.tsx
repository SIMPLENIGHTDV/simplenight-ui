import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12.022 10.815 4.54 4.54a1 1 0 1 0 1.41-1.42l-5.24-5.24a.999.999 0 0 0-1.42 0l-5.29 5.24a1.001 1.001 0 0 0-.29.71 1 1 0 0 0 .29.71 1 1 0 0 0 1.41 0l4.59-4.54Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronUp;
