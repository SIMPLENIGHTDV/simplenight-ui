import * as React from 'react';
import { SVGProps } from 'react';

const SvgGym = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#gym_svg__a)" fill="currentColor">
      <path d="M2.96.834h-.506A.453.453 0 0 0 2 1.288v3.74a.453.453 0 0 0 .454.454h.506a.453.453 0 0 0 .455-.455V1.288A.434.434 0 0 0 2.96.834ZM20.442 0h-1.036a.452.452 0 0 0-.455.455v2.298h-1.516a.878.878 0 0 0-.758-.354.845.845 0 0 0-.607.354H8.745a.937.937 0 0 0-.607-.354.821.821 0 0 0-.758.354H5.865V.455A.453.453 0 0 0 5.411 0H4.374a.453.453 0 0 0-.454.455v5.377a.453.453 0 0 0 .454.455H5.41a.453.453 0 0 0 .455-.455V3.537h1.314c-.304 3.41.025 3.89.173 4.092a7.645 7.645 0 0 0 3.057 2.4l.103 5.13-.985 7.704a.993.993 0 1 0 1.97.252l.91-7.025.884 7.025a1.026 1.026 0 0 0 .985.884h.127a.992.992 0 0 0 .859-1.112l-.96-7.73.1-5.13a8.037 8.037 0 0 0 3.06-2.394c.151-.202.479-.708.173-4.092h1.316v2.298a.45.45 0 0 0 .455.455h1.036a.452.452 0 0 0 .454-.455V.461A.434.434 0 0 0 20.442 0Zm-4.447 6.72c-.48.657-1.844 1.744-2.428 1.744h-2.325c-.58 0-1.92-1.112-2.428-1.744a20.73 20.73 0 0 1 .075-3.183h6.998c.127 1.056.164 2.121.108 3.183ZM22.361.833h-.505a.452.452 0 0 0-.455.455v3.74a.45.45 0 0 0 .455.454h.505a.452.452 0 0 0 .455-.455V1.288a.45.45 0 0 0-.454-.455Z" />
      <path d="M12.409 7.983a2.02 2.02 0 1 0 0-4.042 2.02 2.02 0 0 0 0 4.042Z" />
    </g>
    <defs>
      <clipPath id="gym_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGym;
