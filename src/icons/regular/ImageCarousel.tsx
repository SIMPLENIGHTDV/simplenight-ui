import * as React from 'react';
import { SVGProps } from 'react';
const SvgImageCarousel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 20 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 13.823v-10a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Zm-14-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.36l-1.08-1.09a2.56 2.56 0 0 0-3.62 0l-.91.91-.81-.81a2.93 2.93 0 0 0-4.11 0L2 8.673v-4.85Zm.12 10.45a.94.94 0 0 1-.12-.45v-2.33l2.88-2.88a.91.91 0 0 1 1.29 0l.83.81-4.88 4.85Zm8.6-5.76a.52.52 0 0 1 .39-.17.52.52 0 0 1 .39.17l2.5 2.49v2.82a1 1 0 0 1-1 1H4.4l6.32-6.31ZM19 4.823a1 1 0 0 0-1 1v10a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h10a5 5 0 0 0 5-5v-10a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgImageCarousel;
