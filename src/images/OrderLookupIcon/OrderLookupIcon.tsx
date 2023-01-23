import * as React from 'react';
import { ImageProps } from '../types';

const SvgOrderLookupIcon = ({ variant = 'primary', props }: ImageProps) => (
  <svg
    fill="none"
    className={`text-${variant}-200`}
    viewBox="0 0 71 87"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={35.5}
      cy={35.252}
      r={34.101}
      fill="url(#order-lookup-icon_svg__a)"
      className={`stroke-${variant}-600`}
      strokeWidth={1.533}
    />
    <rect
      x={22.311}
      y={35.076}
      width={33.111}
      height={46.765}
      rx={7}
      transform="rotate(2.5 22.311 35.076)"
      className={`fill-${variant}-200 stroke-${variant}-700 stroke-2`}
    />
    <rect
      x={0.953}
      y={31.242}
      width={37.111}
      height={50.765}
      rx={9}
      transform="rotate(-7.5 .953 31.242)"
      className={`fill-${variant}-100 stroke-${variant}-700 stroke-2`}
    />
    <path
      d="M3.12 40.035a8 8 0 0 1 6.887-8.976l18.948-2.495a8 8 0 0 1 8.975 6.888l.42 3.188-34.81 4.583-.42-3.188Z"
      className={`fill-${variant}-200`}
    />
    <rect
      x={44.456}
      y={28.983}
      width={1.463}
      height={4.877}
      rx={0.731}
      transform="rotate(82.5 44.456 28.983)"
      className={`fill-${variant}-700`}
    />
    <rect
      x={31.096}
      y={20.904}
      width={1.463}
      height={4.877}
      rx={0.731}
      transform="rotate(-7.5 31.096 20.904)"
      className={`fill-${variant}-700`}
    />
    <rect
      x={39.668}
      y={22.235}
      width={1.463}
      height={4.877}
      rx={0.731}
      transform="rotate(37.5 39.668 22.235)"
      className={`fill-${variant}-700`}
    />
    <rect
      x={7.178}
      y={44.712}
      width={28.284}
      height={1.951}
      rx={0.975}
      transform="rotate(-7.5 7.178 44.712)"
      className={`fill-${variant}-300`}
    />
    <rect
      x={8.451}
      y={54.381}
      width={28.284}
      height={1.951}
      rx={0.975}
      transform="rotate(-7.5 8.451 54.381)"
      className={`fill-${variant}-300`}
    />
    <rect
      x={9.724}
      y={64.051}
      width={28.284}
      height={1.951}
      rx={0.975}
      transform="rotate(-7.5 9.724 64.05)"
      className={`fill-${variant}-300`}
    />
    <rect
      x={7.688}
      y={48.579}
      width={10.241}
      height={1.951}
      rx={0.975}
      transform="rotate(-7.5 7.688 48.58)"
      className={`fill-${variant}-200`}
    />
    <rect
      x={8.96}
      y={58.249}
      width={10.241}
      height={1.951}
      rx={0.975}
      transform="rotate(-7.5 8.96 58.249)"
      className={`fill-${variant}-200`}
    />
    <rect
      x={10.233}
      y={67.919}
      width={10.241}
      height={1.951}
      rx={0.975}
      transform="rotate(-7.5 10.233 67.919)"
      className={`fill-${variant}-200`}
    />
    <defs>
      <linearGradient
        id="order-lookup-icon_svg__a"
        x1={35.5}
        y1={0.385}
        x2={35.5}
        y2={70.12}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          className={`text-${variant}-100`}
          stopColor="currentColor"
          stopOpacity={0.1}
        />
        <stop offset={1} stopColor="currentColor" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgOrderLookupIcon;
