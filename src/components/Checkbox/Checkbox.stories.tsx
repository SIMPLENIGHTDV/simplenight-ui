import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Checkbox from './Checkbox';

export default {
  title: `${titles.inputs}Checkbox`,
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const HelloCheckbox = Template.bind({});
export const CheckedSmall = Template.bind({});
HelloCheckbox.args = {
  name: 'hello',
  value: 'hello',
  children: 'Hello',
  size: 'large',
};

CheckedSmall.args = {
  name: 'hello',
  value: 'hello',
  children: 'Hello',
  checked: true,
  size: 'small',
};
