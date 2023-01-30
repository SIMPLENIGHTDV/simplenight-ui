/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from '@/icons/regular';
import { titles } from '@/constants';
import SectionIcon from './SectionIcon';

export default {
  title: `${titles.components}SectionIcon`,
  component: SectionIcon,
} as ComponentMeta<typeof SectionIcon>;

const Template: ComponentStory<typeof SectionIcon> = (args) => (
  <SectionIcon {...args} />
);

export const DefaultIcon = Template.bind({});
export const CustomIcon = Template.bind({});
export const CustomSize = Template.bind({});
export const CustomColor = Template.bind({});

DefaultIcon.args = {};

CustomIcon.args = {
  icon: <Calendar className="text-white" />,
};

CustomSize.args = {
  icon: <Calendar className="text-white" />,
};

CustomColor.args = {
  colorClass: 'bg-purple-500',
  icon: <Calendar className="text-white" />,
};
