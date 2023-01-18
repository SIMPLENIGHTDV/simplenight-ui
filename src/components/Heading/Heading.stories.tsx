import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Heading from './Heading';

export default {
  title: `${titles.text}Heading`,
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingDark = Template.bind({});
HeadingDark.args = {
  tag: 'h1',
  children: 'Heading Test',
};

export const HeadingPrimary = Template.bind({});
HeadingPrimary.args = {
  tag: 'h1',
  children: 'Heading Test',
  textColor: 'text-primary-1000',
};

export const HeadingGreen = Template.bind({});
HeadingGreen.args = {
  tag: 'h3',
  children: 'Heading Test',
  textColor: 'text-green-1000',
};
