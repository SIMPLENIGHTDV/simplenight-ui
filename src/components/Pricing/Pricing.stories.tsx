import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Pricing from './Pricing';

export default {
  title: `${titles.components}Pricing`,
  component: Pricing,
} as ComponentMeta<typeof Pricing>;

const Template: ComponentStory<typeof Pricing> = (args) => (
  <Pricing {...args} />
);

export const Complete = Template.bind({});
export const NoTaxes = Template.bind({});
export const NoDiscount = Template.bind({});
export const OnlyTotal = Template.bind({});

Complete.decorators = [
  () => (
    <Pricing>
      <Pricing.Discount
        totalBeforeDiscount="$1,954.00"
        percentageToApply="15%"
      />
      <Pricing.Total totalAmount="US$199.00" />
      <Pricing.TotalWithTaxes totalAmount="US$300.00" />
      <Pricing.TaxesAndFees />
    </Pricing>
  ),
];
NoTaxes.decorators = [
  () => (
    <Pricing>
      <Pricing.Discount
        totalBeforeDiscount="$1,954.00"
        percentageToApply="15%"
      />
      <Pricing.Total totalAmount="US$199.00" />
    </Pricing>
  ),
];
NoDiscount.decorators = [
  () => (
    <Pricing>
      <Pricing.Total totalAmount="US$199.00" />
      <Pricing.TotalWithTaxes totalAmount="US$300.00" />
      <Pricing.TaxesAndFees />
    </Pricing>
  ),
];
OnlyTotal.decorators = [
  () => (
    <Pricing>
      <Pricing.Total totalAmount="US$199.00" />
    </Pricing>
  ),
];
