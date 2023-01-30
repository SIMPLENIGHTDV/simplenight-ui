import * as React from 'react';
import { SVGProps } from 'react';

const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 49 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#wifi_svg__a)">
      <path
        d="M24.308 30.014a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 8a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4Zm0-16a14.12 14.12 0 0 0-9.9 4.1 2 2 0 0 0 0 2.82 2 2 0 0 0 2.82 0 10 10 0 0 1 14.16 0 2 2 0 0 0 1.4.6 2 2 0 0 0 1.52-3.42 14.12 14.12 0 0 0-10-4.1Zm0-8a22.16 22.16 0 0 0-15.56 6.44 2.009 2.009 0 0 0 2.84 2.84 18 18 0 0 1 25.44 0 2 2 0 0 0 1.42.58 2.001 2.001 0 0 0 1.42-3.42 22.16 22.16 0 0 0-15.56-6.44Zm21.22.78a30 30 0 0 0-42.44 0 2.008 2.008 0 0 0 2.84 2.84 26 26 0 0 1 36.76 0 1.999 1.999 0 0 0 2.84 0 2.002 2.002 0 0 0 0-2.84Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="wifi_svg__a">
        <path fill="currentColor" transform="translate(.5)" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWifi;
