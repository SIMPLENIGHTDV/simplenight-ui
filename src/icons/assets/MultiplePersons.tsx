import * as React from 'react';
import { SVGProps } from 'react';

const SvgMultiplePersons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.3 9.22A4.92 4.92 0 0 0 13 5.5a5 5 0 0 0-10 0 4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 0 16.5a1 1 0 1 0 2 0 6 6 0 1 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0-4.7-7.28ZM8 8.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.74.32A5 5 0 0 0 14 .5a1 1 0 1 0 0 2 3 3 0 0 1 3 3 3 3 0 0 1-1.5 2.59 1 1 0 0 0-.05 1.7l.39.26.13.07a7 7 0 0 1 4 6.38 1 1 0 0 0 2 0 9 9 0 0 0-4.23-7.68Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMultiplePersons;
