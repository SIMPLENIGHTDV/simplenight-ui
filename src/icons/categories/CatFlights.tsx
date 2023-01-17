import * as React from 'react';
import { SVGProps } from 'react';

const SvgCatFlights = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cat-flights_svg__a)">
      <g clipPath="url(#cat-flights_svg__b)">
        <path
          d="M21.75 12a1 1 0 0 0-.55-.89l-6.12-3.06v-4a3.08 3.08 0 0 0-6.16 0v4L2.8 11.11a1 1 0 0 0-.55.89v3.33a1 1 0 0 0 .43.83 1 1 0 0 0 .92.11l5.32-2V18l-1.82.6a1 1 0 0 0-.68.95V22a1 1 0 0 0 .3.71 1 1 0 0 0 .7.29h9.17a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-.68-.95L15.08 18v-3.72l5.32 2a1.001 1.001 0 0 0 .92-.11 1 1 0 0 0 .43-.83V12Zm-7.31-.1a.999.999 0 0 0-1.36.93v5.84a1 1 0 0 0 .69.95l1.81.6V21H8.41v-.78l1.81-.6a1 1 0 0 0 .69-.95v-5.84a1 1 0 0 0-1.36-.93l-5.31 2v-1.28l6.11-3.06a1 1 0 0 0 .56-.89V4.08a1.08 1.08 0 0 1 2.16 0v4.59a1 1 0 0 0 .56.89l6.11 3.06v1.27l-5.3-1.99Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="cat-flights_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
      <clipPath id="cat-flights_svg__b">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCatFlights;
