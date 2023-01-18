import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmallTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 13 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.167 11a.667.667 0 0 0 .666-.667v-4a.667.667 0 1 0-1.333 0v4a.667.667 0 0 0 .667.667Zm6.666-8H9.167v-.667a2 2 0 0 0-2-2H5.833a2 2 0 0 0-2 2V3H1.167a.667.667 0 0 0 0 1.333h.666v7.334a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2V4.333h.666a.667.667 0 1 0 0-1.333Zm-6.666-.667a.667.667 0 0 1 .666-.666h1.334a.667.667 0 0 1 .666.666V3H5.167v-.667Zm4.666 9.334a.667.667 0 0 1-.666.666H3.833a.667.667 0 0 1-.666-.666V4.333h6.666v7.334Zm-2-.667a.667.667 0 0 0 .667-.667v-4a.667.667 0 0 0-1.333 0v4a.667.667 0 0 0 .666.667Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSmallTrash;
