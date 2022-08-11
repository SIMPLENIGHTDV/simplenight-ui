import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Gym from '../Gym';

export default {
  title: `${title}Gym`,
  component: Gym,
} as ComponentMeta<typeof Gym>;

const Template: ComponentStory<typeof Gym> = (args) => <Gym {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
