import * as React from 'react';
import { ImageProps } from '../types';

const ImageEmpty = ({ variant = 'primary', props }: ImageProps) => (
  <svg
    fill="none"
    className={`text-${variant}-200`}
    viewBox="0 0 100 86"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M89.261 47.355c0 21.298-17.264 38.562-38.561 38.562-21.298 0-38.562-17.264-38.562-38.562 0-21.296 17.264-38.561 38.562-38.561 21.296 0 38.561 17.264 38.561 38.561Z"
      className={`fill-${variant}-100`}
    />
    <rect
      x={9.924}
      y={33.169}
      width={67.316}
      height={48.684}
      rx={6.933}
      transform="rotate(-6.742 9.924 33.169)"
      className={`fill-${variant}-200`}
    />
    <g clipPath="url(#image-empty_svg__a)">
      <rect
        x={23.317}
        y={21.509}
        width={65.583}
        height={46.951}
        rx={6.067}
        className={`stroke-${variant}-700 fill-white`}
        strokeWidth={1.733}
      />
      <path
        d="m40.832 43.134-18.39 18.44-1.668 1.892c-2.736 3.105-.532 7.987 3.607 7.987h39.954c4.284 0 6.429-5.179 3.4-8.208L54.169 49.679l-6.528-6.545a4.808 4.808 0 0 0-6.809 0Z"
        fill="url(#image-empty_svg__b)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.79 43.983a3.606 3.606 0 0 0-5.106 0L23.319 62.396l-1.643 1.865c-2.052 2.329-.399 5.99 2.706 5.99h39.953c3.213 0 4.822-3.884 2.55-6.156L46.79 43.983Zm-6.809-1.698a6.01 6.01 0 0 1 8.511 0l20.093 20.11c3.786 3.786 1.105 10.26-4.25 10.26H24.382c-5.174 0-7.93-6.102-4.51-9.984l1.693-1.92L39.98 42.285Z"
        className={`fill-${variant}-400`}
      />
      <path
        d="m68.697 35.112-36.323 36.42h55.29a4.808 4.808 0 0 0 4.808-4.809V52.116L75.506 35.11a4.808 4.808 0 0 0-6.809 0Z"
        fill="url(#image-empty_svg__c)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.655 35.96a3.606 3.606 0 0 0-5.106 0L35.27 70.33h52.393a3.606 3.606 0 0 0 3.606-3.607v-14.11L74.655 35.96Zm-6.809-1.697a6.01 6.01 0 0 1 8.51 0l17.318 17.356v15.104a6.01 6.01 0 0 1-6.01 6.01H29.476l38.37-38.47Z"
        className={`fill-${variant}-400`}
      />
      <rect
        x={23.317}
        y={21.509}
        width={65.583}
        height={46.951}
        rx={6.067}
        strokeWidth={1.733}
        className={`stroke-${variant}-700`}
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.321 77.14a3.311 3.311 0 0 0 3.317-3.306A3.311 3.311 0 0 0 5.32 70.53a3.311 3.311 0 0 0-3.316 3.305A3.311 3.311 0 0 0 5.32 77.14Zm4.508-3.306a4.508 4.508 0 1 1-9.016 0 4.508 4.508 0 0 1 9.016 0Z"
      className={`fill-${variant}-700`}
    />
    <path
      d="M78.942 1.41c0-.333.27-.602.601-.602h10.819a.601.601 0 0 1 0 1.202H79.543a.601.601 0 0 1-.6-.6ZM93.367 1.41c0-.333.27-.602.601-.602h4.808a.601.601 0 0 1 0 1.202h-4.808a.601.601 0 0 1-.6-.6ZM81.947 5.82c0-.332.27-.601.601-.601h4.809a.601.601 0 1 1 0 1.202h-4.809a.601.601 0 0 1-.6-.601Z"
      className={`fill-${variant}-700`}
    />
    <defs>
      <linearGradient
        id="image-empty_svg__b"
        x1={44.839}
        y1={39.721}
        x2={44.839}
        y2={71.453}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop
          offset={1}
          className={`text-${variant}-100`}
          stopColor="currentColor"
        />
      </linearGradient>
      <linearGradient
        id="image-empty_svg__c"
        x1={62.423}
        y1={31.699}
        x2={62.423}
        y2={71.531}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop
          offset={1}
          className={`text-${variant}-100`}
          stopColor="currentColor"
        />
      </linearGradient>
      <clipPath id="image-empty_svg__a">
        <rect
          x={22.451}
          y={20.643}
          width={67.316}
          height={48.684}
          rx={6.933}
          fill="#fff"
        />
      </clipPath>
    </defs>
  </svg>
);
export default ImageEmpty;
