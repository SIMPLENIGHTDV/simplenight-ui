import * as React from 'react';
import { SVGProps } from 'react';

const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13.62 4.71L10.71.29A.999.999 0 0 0 10 0H1a1 1 0 0 0-1 1v9a1 1 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L19.12 13a3 3 0 0 0 0-4.24v-.05Zm-1.41 2.82-6.18 6.17a1 1 0 0 1-1.41 0L2 9.59V2h7.59l8.12 8.12a1.001 1.001 0 0 1 0 1.41Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTag;
