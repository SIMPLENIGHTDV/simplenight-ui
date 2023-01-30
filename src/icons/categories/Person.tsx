import * as React from 'react';
import { SVGProps } from 'react';

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g fill="currentColor" data-name="Group 8781">
      <ellipse
        cx={5.43}
        cy={4.904}
        rx={5.43}
        ry={4.904}
        transform="translate(4.562)"
      />
      <path d="M20 20c0-8.596-9.825-8.186-9.825-8.186h-.35S0 11.404 0 20Z" />
    </g>
  </svg>
);

export default SvgPerson;
