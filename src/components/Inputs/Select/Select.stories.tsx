import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Select`,
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

const selectOptions = [
  { value: '0200', label: '02:00 AM' },
  { value: '0300', label: '03:00 AM' },
  { value: '0400', label: '04:00 AM' },
  { value: '0500', label: '05:00 AM' },
  { value: '0600', label: '06:00 PM' }];

export const Default = Template.bind({});
Default.args = {
  options: selectOptions,
  placeholder: 'Select a time',
  searchable: false,
};
export const Searchable = Template.bind({});
Searchable.args = {
  options: selectOptions,
  placeholder: 'Select a time',
  searchable: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  options: selectOptions,
  defaultValue: selectOptions[0],
  state: 'disabled',
};
export const Success = Template.bind({});
Success.args = {
  options: selectOptions,
  defaultValue: selectOptions[0],
  state: 'success',
};
export const Error = Template.bind({});
Error.args = {
  options: selectOptions,
  placeholder: 'Select a time',
  state: 'error',
};
