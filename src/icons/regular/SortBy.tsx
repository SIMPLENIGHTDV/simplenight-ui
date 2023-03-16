import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortBy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.193 9.527-.193.2v-5.06a.667.667 0 0 0-1.333 0v5.06l-.194-.2a.67.67 0 1 0-.946.946l1.333 1.334c.063.06.138.108.22.14a.628.628 0 0 0 .507 0 .668.668 0 0 0 .22-.14l1.333-1.334a.669.669 0 1 0-.947-.946Zm3.14-4.194H14A.667.667 0 1 0 14 4H7.333a.667.667 0 0 0 0 1.333Zm6.667 2H7.333a.667.667 0 1 0 0 1.334H14a.667.667 0 1 0 0-1.334Zm0 3.334H7.333a.667.667 0 1 0 0 1.333H14a.666.666 0 1 0 0-1.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSortBy;
