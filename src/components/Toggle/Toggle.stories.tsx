import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from './Toggle';

const title = 'SimplenightUI/';

export default {
  title: `${title}Toggle`,
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
