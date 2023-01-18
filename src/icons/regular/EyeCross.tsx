import * as React from 'react';
import { SVGProps } from 'react';
const SvgEyeCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.898 18.865c-.468.468-.53 1.164-.14 1.554.39.39 1.087.328 1.554-.14L19.78 2.813c.467-.468.53-1.163.14-1.554-.391-.39-1.087-.328-1.555.14l-3.194 3.195A8.868 8.868 0 0 0 12 4c-4.1 0-7.9 2.91-9.92 7.6a1 1 0 0 0 0 .8 15.175 15.175 0 0 0 1.952 3.331L.898 18.865ZM5.464 14.3l2.543-2.544a4 4 0 0 1 3.749-3.749l1.818-1.818A6.705 6.705 0 0 0 12 6c-3.17 0-6.17 2.29-7.9 6 .393.843.852 1.613 1.364 2.3ZM12 20c-1.776 0-3.496-.546-5.04-1.547l1.457-1.456C9.541 17.648 10.757 18 12 18c3.17 0 6.17-2.29 7.9-6-.71-1.523-1.634-2.806-2.696-3.79l1.42-1.419c1.33 1.249 2.464 2.878 3.296 4.809a1.001 1.001 0 0 1 0 .8C19.9 17.09 16.1 20 12 20Zm-.78-4.077a4 4 0 0 1-1.252-.477l1.514-1.514a2 2 0 0 0 2.45-2.45l1.514-1.513a4 4 0 0 1-4.226 5.954Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEyeCross;
