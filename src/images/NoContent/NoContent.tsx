import * as React from 'react';
import { ImageProps } from '../types';

const NoContent: React.FC<ImageProps> = (props) => {
  const { variant = 'primary', ...rest } = props;

  return (
    <svg
      fill="none"
      className={`text-${variant}-200`}
      viewBox="0 0 164 156"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M85.903 155.319c42.703 0 77.32-34.617 77.32-77.319 0-42.702-34.617-77.32-77.32-77.32C43.201.68 8.584 35.299 8.584 78c0 42.702 34.617 77.319 77.32 77.319Z"
        fill="url(#no-content_svg__a)"
      />
      <path
        d="m39.52 113.277 83.687 21.059a4.476 4.476 0 0 0 5.548-3.892c1.842-18.18 7.836-78.465 6.8-83.092-33.574 16.828-98.28 57.42-98.28 57.42l-.914 2.743a4.478 4.478 0 0 0 3.157 5.759l.003.003Z"
        className={`fill-${variant}-300`}
      />
      <path
        d="m54.714 25.67 77.684 19.28a4.32 4.32 0 0 1 3.003 5.708c-4.118 11.022-16.672 40.2-42.727 67.701a4.308 4.308 0 0 1-4.29 1.186C69.13 114.165 22.87 99.879 4.816 94.284 1.618 93.29.72 89.196 3.207 86.95c11.319-10.212 36.197-34.457 46.497-58.785a4.31 4.31 0 0 1 5.01-2.495v0Z"
        fill="url(#no-content_svg__b)"
        className={`stroke-${variant}-500 stroke-2`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.72 67.543a4.267 4.267 0 1 0 0-8.533 4.267 4.267 0 0 0 0 8.533Z"
        className={`fill-${variant}-500`}
      />
      <path
        d="M56.055 65.848 102.718 78"
        className={`stroke-${variant}-500 stroke-2`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.26 48.553a4.267 4.267 0 1 0 0-8.534 4.267 4.267 0 0 0 0 8.534Z"
        className={`fill-${variant}-500`}
      />
      <path
        d="m66.594 46.86 46.664 12.15"
        className={`stroke-${variant}-500 stroke-2`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.895 86.534a4.267 4.267 0 1 0 0-8.534 4.267 4.267 0 0 0 0 8.534Z"
        className={`fill-${variant}-500`}
      />
      <path
        d="m40.23 84.838 46.663 12.153"
        className={`stroke-${variant}-500 stroke-2`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="no-content_svg__a"
          x1={85.903}
          y1={-17.935}
          x2={85.903}
          y2={156.361}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.05} stopColor="#FFFFFE" />
          <stop offset={1} stopColor="currentColor" />
        </linearGradient>
        <linearGradient
          id="no-content_svg__b"
          x1={97.993}
          y1={32.897}
          x2={58.5}
          y2={148}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.539} stopColor="#FFFFFE" />
          <stop offset={0.73} stopColor="currentColor" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoContent;
