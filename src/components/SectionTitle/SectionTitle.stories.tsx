/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from '@/icons/regular';
import { titles } from '@/constants';
import SectionTitle from './SectionTitle';

export default {
  title: `${titles.components}SectionTitle`,
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args) => (
  <SectionTitle {...args} />
);

export const DefaulTitle = Template.bind({});
export const CustomIcon = Template.bind({});
export const WithSubTitle = Template.bind({});
export const WithoutIcon = Template.bind({});

DefaulTitle.args = {
  title: 'Hello World',
};

CustomIcon.args = {
  icon: <Calendar />,
  title: 'Hello World',
};

WithSubTitle.args = {
  title: 'Hello World',
  subTitle: 'This is a subtitle',
  icon: <Calendar />,
};

WithoutIcon.args = {
  title: 'Hello World',
  displayIcon: false,
};
