import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import QuestionCircle from '../QuestionCircle';

export default {
  title: `${title}QuestionCircleIcon`,
  component: QuestionCircle,
} as ComponentMeta<typeof QuestionCircle>;

const Template: ComponentStory<typeof QuestionCircle> = (args) => <QuestionCircle {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
