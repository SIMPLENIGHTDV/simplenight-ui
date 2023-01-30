import * as React from 'react';
import { SVGProps } from 'react';

const SvgCarouselRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 52 56"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#carousel-right-arrow_svg__a)">
      <path
        d="M44 28c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16Z"
        fill="#fff"
        fillOpacity={0.9}
      />
      <path
        d="m29.705 28.044-4.54 4.54a1 1 0 1 0 1.42 1.41l5.24-5.24a1 1 0 0 0 0-1.42l-5.24-5.29a1 1 0 0 0-.71-.29 1 1 0 0 0-.71.29 1 1 0 0 0 0 1.41l4.54 4.59Z"
        fill="#7A7A7A"
      />
      <path
        d="M28 13c8.284 0 15 6.716 15 15h2c0-9.389-7.611-17-17-17v2ZM13 28c0-8.284 6.716-15 15-15v-2c-9.389 0-17 7.611-17 17h2Zm15 15c-8.284 0-15-6.716-15-15h-2c0 9.389 7.611 17 17 17v-2Zm0 2c9.389 0 17-7.611 17-17h-2c0 8.284-6.716 15-15 15v2Z"
        fill="#E6E6E6"
      />
    </g>
    <defs>
      <filter
        id="carousel-right-arrow_svg__a"
        x={0}
        y={0}
        width={56}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2142_603"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2142_603"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCarouselRightArrow;
