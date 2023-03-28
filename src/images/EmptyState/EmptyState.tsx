import * as React from 'react';
import { ImageProps } from '../types';

const EmptyState: React.FC<ImageProps> = (props) => {
  const { variant = 'primary', ...rest } = props;

  return (
    <svg
      fill="none"
      viewBox="0 0 158 146"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${variant}-200`}
      {...rest}
    >
      <circle
        cx={71.943}
        cy={71.927}
        r={71.775}
        className={`fill-${variant}-200`}
      />
      <circle
        cx={71.356}
        cy={71.621}
        r={41.919}
        className={`fill-${variant}-100 stroke-${variant}-600 stroke-2`}
      />
      <circle
        cx={71.356}
        cy={71.621}
        r={29.657}
        className={`stroke-${variant}-600 stroke-2`}
        fill="url(#empty-state_svg__a)"
      />
      <path
        d="M71.356 49.083a.794.794 0 0 0-.815-.801 23.354 23.354 0 0 0-22.42 20.983.794.794 0 0 0 .746.867.84.84 0 0 0 .883-.759 21.723 21.723 0 0 1 20.791-19.46.84.84 0 0 0 .815-.83Z"
        className={`fill-${variant}-600`}
      />
      <rect
        x={104.033}
        y={117.135}
        width={14}
        height={42}
        rx={7}
        transform="rotate(-45 104.033 117.135)"
        className={`stroke-${variant}-600 fill-${variant}-100 stroke-2`}
      />
      <rect
        x={119.498}
        y={120.505}
        width={0.974}
        height={15.362}
        rx={0.487}
        transform="rotate(-45 119.498 120.505)"
        className={`stroke-${variant}-600 fill-white`}
        strokeWidth={0.974}
      />
      <path
        fill="#C4C4C4"
        className={`stroke-${variant}-600`}
        d="m103.318 107.228.707-.707 4.95 4.95-.707.707z"
      />
      <rect
        x={123.831}
        y={66.585}
        width={20}
        height={2}
        rx={1}
        className={`fill-${variant}-500`}
      />
      <rect
        x={0.169}
        y={83.13}
        width={20}
        height={2}
        rx={1}
        className={`fill-${variant}-500`}
      />
      <rect
        x={147.831}
        y={66.585}
        width={10}
        height={2}
        rx={1}
        className={`fill-${variant}-500`}
      />
      <rect
        x={128.831}
        y={73.923}
        width={10}
        height={2}
        rx={1}
        className={`fill-${variant}-500`}
      />
      <rect
        x={5.169}
        y={90.468}
        width={10}
        height={2}
        rx={1}
        className={`fill-${variant}-500`}
      />
      <defs>
        <linearGradient
          id="empty-state_svg__a"
          x1={71.356}
          y1={40.964}
          x2={71.356}
          y2={102.278}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop
            offset={1}
            className={`text-${variant}-100`}
            stopColor="currentColor"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default EmptyState;
