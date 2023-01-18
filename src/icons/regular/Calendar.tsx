import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m17.482 2.546-2-.008.005-1a1 1 0 1 0-2-.009l-.005 1-6-.026.005-1a1 1 0 1 0-2-.008l-.004 1-2-.009A3 3 0 0 0 .47 5.473l-.052 12a3 3 0 0 0 2.987 3.013l14 .06a3 3 0 0 0 3.012-2.987l.052-12a3 3 0 0 0-2.987-3.013Zm.936 15.005a1 1 0 0 1-1.005.995l-14-.06a1 1 0 0 1-.995-1.005l.03-7 16 .07-.03 7Zm.038-9-16-.07.014-3a1 1 0 0 1 1.004-.995l2 .009-.004 1a1 1 0 0 0 2 .008l.004-1 6 .026-.005 1a1 1 0 1 0 2 .009l.005-1 2 .008a1 1 0 0 1 .995 1.005l-.013 3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCalendar;
