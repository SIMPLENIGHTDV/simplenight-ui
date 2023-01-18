import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';

import NumberInput from '.';

export default {
  title: `${titles.inputs}Number Input`,
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disable = Template.bind({});
Disable.args = {
  disabled: true,
};
