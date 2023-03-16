/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import SortByButton from './SortByButton';
import { Heading } from '@/index';

export default {
  title: `${titles.components}SortByButtons`,
  component: SortByButton,
} as ComponentMeta<typeof SortByButton>;

const Template: ComponentStory<typeof SortByButton> = (args) => (
  <SortByButton {...args} />
);

export const DefaultExpanded = Template.bind({});
export const DefaultCollapsed = Template.bind({});
export const CustomLabelExpanded = Template.bind({});
export const CustomLabelCollapsed = Template.bind({});

DefaultExpanded.args = {
  isOpen: true,
  onClick: () => {},
};
DefaultCollapsed.args = {
  isOpen: false,
  onClick: () => {},
};
CustomLabelExpanded.args = {
  label: 'Recommended',
  isOpen: true,
};
CustomLabelCollapsed.args = {
  label: 'Recommended',
  isOpen: false,
};
