/* eslint-disable react/require-default-props */
import React from 'react';
import { useLoaderSize } from '../../hooks/useLoaderProperties';
import { LoaderProps } from './LoaderTypes';

const Loader = ({
  circleColor = 'text-primary-200',
  spinnerColor = 'text-primary-1000',
  size = 'large',
}: LoaderProps) => {
  const {
    spinnerWidth,
    spinnerHeight,
    spinnerRadius,
    spinnerStrokeWidth,
    strokePath,
  } = useLoaderSize(size);

  return (
    <div className="relative flex items-center justify-center flex-none ">
      <svg
        className={circleColor}
        width={spinnerWidth}
        height={spinnerHeight}
        viewBox={`0 0 ${spinnerWidth} ${spinnerHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={spinnerWidth / 2}
          cy={spinnerHeight / 2}
          r={spinnerRadius}
          stroke="currentColor"
          strokeWidth={spinnerStrokeWidth}
        />
      </svg>
      <svg
        className={`absolute animate-spin ${spinnerColor}`}
        width={spinnerWidth}
        height={spinnerHeight}
        viewBox={`0 0 ${spinnerWidth} ${spinnerHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={strokePath}
          stroke="currentColor"
          strokeWidth={spinnerStrokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;
