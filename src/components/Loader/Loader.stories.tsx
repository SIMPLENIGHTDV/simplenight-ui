import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Loader from './Loader';

export default {
  title: `${titles.components}Loader`,
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Standard = Template.bind({});
export const Blue = Template.bind({});
Standard.args = {};
Blue.args = {
  circleColor: 'text-blue-200',
  spinnerColor: 'text-blue-900',
};
