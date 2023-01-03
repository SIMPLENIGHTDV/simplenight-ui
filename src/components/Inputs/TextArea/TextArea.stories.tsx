import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Text Area`,
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
export const Idle = Template.bind({});
Idle.args = {
  placeholder: 'Placeholder',
  state: 'idle',
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
