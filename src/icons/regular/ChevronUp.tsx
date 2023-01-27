import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.018 9.012 3.784 3.784a.833.833 0 1 0 1.175-1.184L10.61 7.246a.833.833 0 0 0-1.183 0l-4.409 4.366a.834.834 0 0 0-.241.592.833.833 0 0 0 .241.591.833.833 0 0 0 1.175 0l3.825-3.783Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronUp;
