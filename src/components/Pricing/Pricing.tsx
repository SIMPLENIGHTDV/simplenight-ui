import React from 'react';

import { Paragraph } from '@/index';
import IconWrapper from '../IconWrapper';
import QuestionCircle from '@/icons/regular/QuestionCircle';
import { IPricing, IPricingDiscount, IPricingTotal } from './PricingTypes';
import Tooltip from '../Tooltip/Tooltip';

const Pricing = ({ children }: IPricing) => {
  return <div className=" text-right flex flex-col items-end ">{children}</div>;
};

Pricing.Discount = ({
  totalBeforeDiscount,
  percentageToApply,
}: IPricingDiscount) => {
  return (
    <div className="flex gap-1">
      <Paragraph textColor="text-dark-700" className="line-through">
        {totalBeforeDiscount}
      </Paragraph>
      <Paragraph textColor="text-green-1000" fontWeight="semibold">
        {`${percentageToApply} Off`}
      </Paragraph>
    </div>
  );
};
Pricing.Total = ({ totalAmount }: IPricingTotal) => {
  return (
    <Paragraph size="medium" fontWeight="semibold">
      {totalAmount}
    </Paragraph>
  );
};
Pricing.TotalWithTaxes = ({ totalAmount }: IPricingTotal) => {
  return (
    <Paragraph size="xxsmall" fontWeight="semibold">
      {`Total ${totalAmount}`}
    </Paragraph>
  );
};
Pricing.TaxesAndFees = () => {
  return (
    <div className="flex gap-1 items-center">
      <Paragraph size="xxsmall" textColor="text-dark-800">
        Includes Taxes and Fees
      </Paragraph>

      <Tooltip
        text="The taxes are tax recovery charges Simplenight pays to its vendors (e.g. hotels); for details, please see our Terms of Use. We retain our service fees as compensation in servicing your travel reservation."
        position="bottom-right"
      >
        <IconWrapper size={16}>
          <QuestionCircle className="text-dark-800" />
        </IconWrapper>
      </Tooltip>
    </div>
  );
};

export default Pricing;
