import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import DateInput from '.';

export default {
  title: `${titles.inputs}Date Input`,
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  value: 'Date',
};

export const Open = Template.bind({});
Open.args = {
  placeholder: 'Placeholder',
  isOpen: true,
  value: 'Date',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Placeholder',
  state: 'error',
  isOpen: true,
  value: 'Date',
};

export const Success = Template.bind({});
Open.args = {
  placeholder: 'Placeholder',
  state: 'success',
  isOpen: true,
  value: 'Date',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Placeholder',
  state: 'disabled',
  isOpen: true,
  value: 'Date',
};
