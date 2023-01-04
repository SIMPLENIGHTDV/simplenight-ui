import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.018 9.012l3.784 3.784a.833.833 0 101.175-1.184L10.61 7.246a.833.833 0 00-1.183 0l-4.409 4.366a.834.834 0 00-.241.592.833.833 0 00.241.591.833.833 0 001.175 0l3.825-3.783z"
    />
  </svg>
);

export default SvgChevronUp;
