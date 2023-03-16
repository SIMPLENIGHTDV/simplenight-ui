import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import SortBy from '../SortBy';

export default {
  title: `${title}SortBy`,
  component: SortBy,
} as ComponentMeta<typeof SortBy>;

const Template: ComponentStory<typeof SortBy> = (args) => <SortBy {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
