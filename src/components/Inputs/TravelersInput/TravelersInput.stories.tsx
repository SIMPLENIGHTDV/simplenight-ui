import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import TravelersInput from '.';

export default {
  title: `${titles.inputs}Travelers/Travelers Input`,
  component: TravelersInput,
} as ComponentMeta<typeof TravelersInput>;

const Template: ComponentStory<typeof TravelersInput> = (args) => (
  <TravelersInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  value: '',
};

export const Open = Template.bind({});
Open.args = {
  placeholder: 'Placeholder',
  isOpen: true,
  value: '2 Adults, 2 Children',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Placeholder',
  state: 'error',
  isOpen: false,
  value: '2 Adults, 2 Children',
};

export const Success = Template.bind({});
Success.args = {
  placeholder: 'Placeholder',
  state: 'success',
  isOpen: false,
  value: '2 Adults, 2 Children',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Placeholder',
  state: 'disabled',
  isOpen: false,
  value: '2 Adults, 2 Children',
};
