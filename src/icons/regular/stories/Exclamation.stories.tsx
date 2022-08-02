import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Exclamation from '../Exclamation';

export default {
  title: `${title}Exclamation`,
  component: Exclamation,
} as ComponentMeta<typeof Exclamation>;

const Template: ComponentStory<typeof Exclamation> = (args) => (
  <Exclamation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
