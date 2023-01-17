import * as React from 'react';
import { SVGProps } from 'react';

const SvgTransportation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      d="M11 0C4.9 0 0 4.9 0 11v28c0 1.1.4 2.2 1 3v3c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3v-1h11v-6.2c0-.9.2-1.9.5-2.7l1.6-3.6 1-2.2c.2-.4.4-.8.7-1.1H7c-1.1 0-2-.9-2-2V13c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v12h5V11c0-6.1-4.9-11-11-11H11zm1 4h15c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H12c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm19.6 23c-2 0-3.7 1.1-4.6 3l-1 2.2-1.6 3.6c-.2.6-.4 1.3-.4 2V48c0 1.2.8 2 2 2h3c1.2 0 2-.8 2-2v-1h12v1c0 1.2.8 2 2 2h3c1.2 0 2-.8 2-2V37.8c0-.7-.1-1.3-.4-2L47 30c-.9-1.8-2.6-3-4.6-3H31.6zm.1 2h10.8c1.2 0 2.3.7 2.8 1.8l1.3 2.8c.1.3.2.5.2.8V36c0 .6-.4 1-1 1H28.4c-.6 0-1-.4-1-1v-1.6c0-.3.1-.6.2-.8l1.3-2.8c.5-1.1 1.6-1.8 2.8-1.8zM8.5 32c1.9 0 3.5 1.6 3.5 3.5S10.4 39 8.5 39 5 37.4 5 35.5 6.6 32 8.5 32zM30 39c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm14 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTransportation;
