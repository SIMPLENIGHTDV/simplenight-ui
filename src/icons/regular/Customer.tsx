import * as React from 'react';
import { SVGProps } from 'react';

const SvgCustomer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.81 12.28a3.73 3.73 0 0 0 1-2.5 3.78 3.78 0 1 0-7.56 0 3.73 3.73 0 0 0 1 2.5A5.94 5.94 0 0 0 6 16.89a1.006 1.006 0 1 0 2 .22 4 4 0 0 1 7.94 0A1 1 0 0 0 17 18h.11a1 1 0 0 0 .88-1.1 5.94 5.94 0 0 0-3.18-4.62ZM12 11.56A1.78 1.78 0 1 1 12 8a1.78 1.78 0 0 1 0 3.56ZM19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCustomer;
