import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Eye from '../Eye';

export default {
  title: `${title}Eye`,
  component: Eye,
} as ComponentMeta<typeof Eye>;

const Template: ComponentStory<typeof Eye> = (args) => <Eye {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
