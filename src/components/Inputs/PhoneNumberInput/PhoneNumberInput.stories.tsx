import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PhoneNumberInput from './PhoneNumberInput';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Phone Number Input`,
  component: PhoneNumberInput,
} as ComponentMeta<typeof PhoneNumberInput>;

const Template: ComponentStory<typeof PhoneNumberInput> = (args) => (
  <PhoneNumberInput {...args} />
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
  state: 'success',
};
