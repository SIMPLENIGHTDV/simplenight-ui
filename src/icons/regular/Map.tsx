import * as React from 'react';
import { SVGProps } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 14 13"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12.963 1.367-4-1.334h-.046a.467.467 0 0 0-.094 0h-.286l-3.787 1.3L.963.033a.667.667 0 0 0-.6.094.667.667 0 0 0-.28.54V10a.667.667 0 0 0 .454.633l4 1.334a.667.667 0 0 0 .413 0l3.8-1.267 3.787 1.3c.07.01.142.01.213 0a.627.627 0 0 0 .387-.127.667.667 0 0 0 .28-.54V2a.667.667 0 0 0-.454-.633Zm-8.88 9.04L1.417 9.52V1.593l2.666.887v7.927Zm4-.887-2.666.887V2.48l2.666-.887V9.52Zm4 .887L9.417 9.52V1.593l2.666.887v7.927Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMap;
