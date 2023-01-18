import * as React from 'react';
import { SVGProps } from 'react';
const SvgLaundry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 49 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#laundry_svg__a)">
      <g clipPath="url(#laundry_svg__b)">
        <path
          d="M45.314 43.461V3.72a3.914 3.914 0 0 0-.312-1.553 3.63 3.63 0 0 0-3.256-2.15H7.192a10.685 10.685 0 0 0-1.73.063 3.623 3.623 0 0 0-2.87 2.754 4.767 4.767 0 0 0-.092.981v39.838a5.27 5.27 0 0 0 .327 2.228A3.644 3.644 0 0 0 6.1 48.005h35.386c.338.004.675-.026 1.008-.09a3.625 3.625 0 0 0 2.763-2.898c.06-.516.079-1.037.057-1.556ZM14.367 4.62a2.704 2.704 0 0 1 2.95-.81 2.738 2.738 0 0 1 1.804 2.483V6.4a2.694 2.694 0 1 1-4.754-1.784v.002ZM6.532 7.726a2.694 2.694 0 1 1 5.009-1.44v.11a2.694 2.694 0 0 1-5.01 1.33Zm33.334 23.266A16.315 16.315 0 0 1 26.399 43.86c-.827.122-1.662.182-2.497.178a16.273 16.273 0 0 1-10.324-28.856 16.201 16.201 0 0 1 9.052-3.643 16.263 16.263 0 0 1 17.229 19.445l.007.007Zm-6.977-12.204a.535.535 0 0 0-.733 0l-1.715 1.714-4.12 4.121a1966.439 1966.439 0 0 1-4.961 4.961l-4.307 4.303c-.695.696-1.427 1.377-2.094 2.094l-.03.03a.535.535 0 0 0 0 .734 12.714 12.714 0 0 0 6.816 3.532c2.547.431 5.165.087 7.514-.988 1.34-.621 2.56-1.473 3.605-2.516.01-.01.021-.016.027-.026a12.714 12.714 0 0 0 3.127-12.82 12.68 12.68 0 0 0-3.127-5.14l-.002.001Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="laundry_svg__a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h48v48H0z" />
      </clipPath>
      <clipPath id="laundry_svg__b">
        <path fill="#fff" transform="translate(.5)" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLaundry;
