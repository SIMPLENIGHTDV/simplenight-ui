import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import MinusIcon from '../MinusIcon';

export default {
  title: `${title}MinusIcon`,
  component: MinusIcon,
} as ComponentMeta<typeof MinusIcon>;

const Template: ComponentStory<typeof MinusIcon> = (args) => (
  <MinusIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
