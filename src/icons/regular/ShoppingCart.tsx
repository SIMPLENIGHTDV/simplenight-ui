import * as React from 'react';
import { SVGProps } from 'react';
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 18 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM17 13H5a1 1 0 0 1 0-2h8.491a3.014 3.014 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 17 2H4.74A3.007 3.007 0 0 0 1.92 0H1a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005L4.68 9.017A3 3 0 0 0 5 15h12a1 1 0 0 0 0-2Zm-1.326-9-1.22 4.274A1.005 1.005 0 0 1 13.49 9H6.754L6.5 8.108 5.326 4h10.348ZM14.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgShoppingCart;
