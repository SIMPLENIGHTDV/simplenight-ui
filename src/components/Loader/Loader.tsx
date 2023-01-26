/* eslint-disable react/require-default-props */
import React from 'react';

export interface LoaderProps {
  circleColor?: string;
  spinnerColor?: string;
  size?:'large'|'small'
}

const Loader = ({
  circleColor = 'text-primary-200',
  spinnerColor = 'text-primary-1000',
  size = 'large',
}: LoaderProps) => {
  const getSmallSpinnerProperties = () => ({
    spinnerWidth: 24,
    spinnerHeight: 24,
    spinnerRadius: 10,
    spinnerStrokeWidth: 4,
    strokePath: 'M12 2C14.8754 2 17.4674 3.21363 19.2917 5.15659',
  });
  const getLargeSpinnerProperties = () => ({
    spinnerWidth: 80,
    spinnerHeight: 80,
    spinnerRadius: 36,
    spinnerStrokeWidth: 8,
    strokePath: 'M40 4C50.3516 4 59.6827 8.36906 66.25 15.3637',
  });

  const getSpinnerProperties = () => {
    const isLarge = size === 'large';
    if (isLarge) return getLargeSpinnerProperties();
    return getSmallSpinnerProperties();
  };

  const { spinnerWidth, spinnerHeight, spinnerRadius, spinnerStrokeWidth,
    strokePath } = getSpinnerProperties();

  return (
    <div
      className="relative flex items-center justify-center flex-none "
    >
      <svg
        className={circleColor}
        width={spinnerWidth}
        height={spinnerHeight}
        viewBox={`0 0 ${spinnerWidth} ${spinnerHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={spinnerWidth / 2} cy={spinnerHeight / 2} r={spinnerRadius} stroke="currentColor" strokeWidth={spinnerStrokeWidth} />
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
