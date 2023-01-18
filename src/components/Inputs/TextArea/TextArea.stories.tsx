import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import TextArea from '.';

export default {
  title: `${titles.inputs}Text Area`,
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Placeholder',
  state: 'disabled',
};
export const Error = Template.bind({});
Error.args = {
  placeholder: 'Placeholder',
  state: 'error',
};
export const Success = Template.bind({});
Success.args = {
  placeholder: 'Placeholder',
  value: 'Filled',
  state: 'success',
};
