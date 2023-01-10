import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TravelersInput from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Travelers Input`,
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
