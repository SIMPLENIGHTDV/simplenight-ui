import * as React from 'react';
import { SVGProps } from 'react';
const SvgLocationMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      filter="url(#location-marker_svg__b)"
      clipPath="url(#location-marker_svg__a)"
    >
      <path
        d="M19.667 2A14.666 14.666 0 0 0 5 16.667c0 9.9 12.925 21.083 13.475 21.56a1.834 1.834 0 0 0 2.383 0c.642-.477 13.475-11.66 13.475-21.56A14.667 14.667 0 0 0 19.667 2Z"
        fill="currentColor"
      />
      <path
        d="M19.666 24a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="location-marker_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
      <filter
        id="location-marker_svg__b"
        x={-17}
        y={-12.667}
        width={73.333}
        height={80.667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={7.333} />
        <feGaussianBlur stdDeviation={11} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgLocationMarker;
