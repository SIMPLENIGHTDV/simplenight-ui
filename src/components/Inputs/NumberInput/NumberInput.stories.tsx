import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from '../../../constants/constants';

import NumberInput from '.';

export default {
  title: `${title}Number Input`,
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
