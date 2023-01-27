import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.417.333H2.083a2 2 0 0 0-2 2v.78a2 2 0 0 0 .167.8v.04c.094.214.228.409.393.574l4.107 4.08V13a.667.667 0 0 0 .667.667.666.666 0 0 0 .3-.074l2.666-1.333a.667.667 0 0 0 .367-.593v-3.06l4.08-4.08c.166-.165.3-.36.393-.574v-.04a2 2 0 0 0 .194-.8v-.78a2 2 0 0 0-2-2ZM7.61 7.86a.667.667 0 0 0-.193.473v2.92l-1.334.667V8.333a.667.667 0 0 0-.193-.473L2.357 4.333h8.786L7.61 7.86ZM12.083 3H1.417v-.667a.667.667 0 0 1 .666-.666h9.334a.667.667 0 0 1 .666.666V3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFilter;
