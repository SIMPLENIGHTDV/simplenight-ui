/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from '../../icons/regular';

import SectionIcon from './SectionIcon';

const title = 'SimplenightUI/';

export default {
  title: `${title}SectionIcon`,
  component: SectionIcon,
} as ComponentMeta<typeof SectionIcon>;

const Template: ComponentStory<typeof SectionIcon> = (args) => <SectionIcon {...args} />;

export const DefaultIcon = Template.bind({});
export const CustomIcon = Template.bind({});
export const CustomSizeAndColor = Template.bind({});

DefaultIcon.args = {};

CustomIcon.args = {
  icon: <Calendar />,
};

CustomSizeAndColor.args = {
  sizeRem: 4,
  colorClass: 'bg-purple-500',
  icon: <Calendar />,
};
