import * as React from 'react';
import { SVGProps } from 'react';
const SvgAllInclusive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m2.823 11.3-1.433.94L0 11.3a12.022 12.022 0 0 1 24 0l-1.528-.937-1.295.937A9.208 9.208 0 0 0 5.492 5.5a9.113 9.113 0 0 0-2.669 5.8Zm15.685 7.2a9.2 9.2 0 0 1-15.685-5.8l-1.5.937L0 12.7a12.022 12.022 0 0 0 24 0l-1.528-.937-1.295.937a9.11 9.11 0 0 1-2.669 5.8ZM16.5 7.2l-6 5.992-3-3-2.261 2.255L10.5 17.7l8.261-8.25L16.5 7.2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAllInclusive;
