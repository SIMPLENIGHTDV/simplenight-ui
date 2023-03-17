import React from 'react';

import { Paragraph } from '@/index';
import IconWrapper from '../IconWrapper';
import QuestionCircle from '@/icons/regular/QuestionCircle';
import { IPricing, IPricingDiscount, IPricingTotal } from './PricingTypes';

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
      <IconWrapper size={16}>
        <QuestionCircle className="text-dark-800" />
      </IconWrapper>
    </div>
  );
};

export default Pricing;
