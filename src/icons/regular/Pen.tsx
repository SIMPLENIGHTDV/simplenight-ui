import * as React from 'react';
import { SVGProps } from 'react';

const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.667 4.827a.666.666 0 0 0-.194-.474l-2.826-2.826a.667.667 0 0 0-.474-.194.667.667 0 0 0-.473.194L8.813 3.413 1.527 10.7a.666.666 0 0 0-.194.473V14a.667.667 0 0 0 .667.667h2.827a.666.666 0 0 0 .506-.194l7.247-7.286 1.893-1.854a.793.793 0 0 0 .147-.22.659.659 0 0 0 0-.16.47.47 0 0 0 0-.093l.047-.033ZM4.553 13.333H2.667v-1.886l6.62-6.62 1.886 1.886-6.62 6.62Zm7.56-7.56-1.886-1.886.946-.94 1.88 1.88-.94.946Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPen;
