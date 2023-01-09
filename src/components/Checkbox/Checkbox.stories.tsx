import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

const title = 'SimplenightUI/';

export default {
  title: `${title}Checkbox`,
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

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
