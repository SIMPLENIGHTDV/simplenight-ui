import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Toggle from './Toggle';

export default {
  title: `${titles.inputs}Toggle`,
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const HelloToggle = Template.bind({});
export const DefaultChecked = Template.bind({});
HelloToggle.args = {
  children: 'Hello toggle',
};

DefaultChecked.args = {
  children: 'Hello checked',
  checked: true,
};
