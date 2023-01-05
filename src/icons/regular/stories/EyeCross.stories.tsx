import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import EyeCross from '../EyeCross';

export default {
  title: `${title}EyeCross`,
  component: EyeCross,
} as ComponentMeta<typeof EyeCross>;

const Template: ComponentStory<typeof EyeCross> = (args) => (
  <EyeCross {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
