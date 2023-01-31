import * as React from 'react';
import { SVGProps } from 'react';

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.94 8 2.867-2.86a.67.67 0 0 0-.947-.947L8 7.06 5.14 4.193a.67.67 0 1 0-.947.947L7.06 8l-2.867 2.86a.667.667 0 0 0 .217 1.093.667.667 0 0 0 .73-.146L8 8.94l2.86 2.867a.667.667 0 0 0 1.093-.217.668.668 0 0 0-.146-.73L8.94 8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCross;
