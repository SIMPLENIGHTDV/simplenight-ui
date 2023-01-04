import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.978 13.23l-4.54-4.54a1 1 0 10-1.41 1.42l5.24 5.24a1 1 0 001.42 0l5.29-5.24a1 1 0 00.29-.71 1 1 0 00-.29-.71 1 1 0 00-1.41 0l-4.59 4.54z"
    />
  </svg>
);

export default SvgChevronDown;
