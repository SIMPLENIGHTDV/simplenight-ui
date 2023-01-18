import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import PriceInput from '.';

export default {
  title: `${titles.inputs}Price Input`,
  component: PriceInput,
} as ComponentMeta<typeof PriceInput>;

const Template: ComponentStory<typeof PriceInput> = (args) => (
  <PriceInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  currency: 'usd',
};
