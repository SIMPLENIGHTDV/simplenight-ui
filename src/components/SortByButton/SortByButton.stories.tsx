/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import SortByButton from './SortByButton';

export default {
  title: `${titles.components}SortByButton`,
  component: SortByButton,
} as ComponentMeta<typeof SortByButton>;

const Template: ComponentStory<typeof SortByButton> = (args) => (
  <SortByButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'string',
};
