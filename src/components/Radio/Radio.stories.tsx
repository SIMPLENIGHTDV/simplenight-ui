/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './Radio';

const title = 'SimplenightUI/';

export default {
  title: `${title}Radio`,
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

const TemplateCheckedByValue: ComponentStory<typeof Radio> = (args) => (
  // eslint-disable-next-line react/destructuring-assignment
  <Radio {...args} checked={args.value === 'hello'} />
);

export const HelloRadio = Template.bind({});
export const CheckedByValue = TemplateCheckedByValue.bind({});
HelloRadio.args = {
  value: 'hello',
  children: 'Hello Radio',
  onChange: (value) => {},
  checked: false,
};

CheckedByValue.args = {
  value: 'hello',
  children: 'Hello Checked',
  onChange: (value) => {},
};
