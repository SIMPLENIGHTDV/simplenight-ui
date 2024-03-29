import * as React from 'react';
import { SVGProps } from 'react';

const SvgLocationPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 0a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C9 19.5 16 13.4 16 8a8 8 0 0 0-8-8Zm0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 1 1 12 0c0 3.34-3.87 7.66-6 9.65ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLocationPin;
