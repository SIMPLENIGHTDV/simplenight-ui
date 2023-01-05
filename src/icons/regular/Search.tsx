import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.0917 15.9084L14 12.8417C15.2001 11.3454 15.7813 9.44613 15.624 7.53446C15.4668 5.62279 14.5831 3.84403 13.1546 2.56391C11.7262 1.2838 9.86152 0.599634 7.94411 0.652101C6.02671 0.704568 4.20228 1.48968 2.84596 2.84599C1.48965 4.20231 0.704538 6.02674 0.652071 7.94415C0.599604 9.86155 1.28377 11.7262 2.56388 13.1546C3.844 14.5831 5.62276 15.4668 7.53443 15.6241C9.44609 15.7813 11.3454 15.2001 12.8417 14L15.9083 17.0667C15.9858 17.1448 16.078 17.2068 16.1795 17.2491C16.2811 17.2914 16.39 17.3132 16.5 17.3132C16.61 17.3132 16.7189 17.2914 16.8205 17.2491C16.922 17.2068 17.0142 17.1448 17.0917 17.0667C17.2419 16.9113 17.3258 16.7037 17.3258 16.4875C17.3258 16.2714 17.2419 16.0638 17.0917 15.9084ZM8.16668 14C7.01295 14 5.88514 13.6579 4.92585 13.0169C3.96657 12.376 3.21889 11.4649 2.77738 10.399C2.33587 9.33313 2.22035 8.16024 2.44543 7.02868C2.67051 5.89713 3.22608 4.85773 4.04189 4.04192C4.8577 3.22611 5.8971 2.67054 7.02865 2.44546C8.16021 2.22038 9.3331 2.3359 10.399 2.77741C11.4649 3.21892 12.3759 3.9666 13.0169 4.92588C13.6579 5.88517 14 7.01299 14 8.16671C14 9.71381 13.3854 11.1975 12.2915 12.2915C11.1975 13.3855 9.71377 14 8.16668 14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;
