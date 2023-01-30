import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.978 13.23-4.54-4.54a1 1 0 1 0-1.41 1.42l5.24 5.24a1 1 0 0 0 1.42 0l5.29-5.24a1 1 0 0 0 .29-.71 1 1 0 0 0-.29-.71 1 1 0 0 0-1.41 0l-4.59 4.54Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronDown;
