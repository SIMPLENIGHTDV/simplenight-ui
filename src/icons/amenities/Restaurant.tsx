import * as React from 'react';
import { SVGProps } from 'react';

const SvgRestaurant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#restaurant_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.019 3.991c2.977 3.834 5.62 6.988 6.97 7.531.929.184 1.885.181 2.812-.009l.346.31 1.664-1.654-.278-.328a6.763 6.763 0 0 0-.027-2.977c-.36-.957-3.852-3.86-7.48-6.847a.636.636 0 0 0-.762.834l5.225 4.832-.857 1.052-5.033-5.05a.716.716 0 0 0-.866.925l4.965 4.951-.76.853L.845 3.166a.668.668 0 0 0-.827.825Zm1.24 17.46a1.9 1.9 0 0 0 2.475 2.389l9.136-10.527 1.732-.164C20.711 6.383 23.615 1.752 22.388.37l-21.13 21.08Zm11.579-7.198c2.625 3.177 5.315 6.231 8.082 9.063 2.01 1.64 4.326-.2 2.274-2.42a72.335 72.335 0 0 0-8.219-7.432c-.492.688-1.813.014-2.137.784v.005Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="restaurant_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRestaurant;
