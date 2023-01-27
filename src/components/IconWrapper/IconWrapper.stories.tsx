/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconWrapper from './IconWrapper';
import { titles } from '@/constants';
import { ChevronUp, Edit } from '@/icons';
import { IIconWrapper } from './IconWrapperTypes';
import { Paragraph } from '..';

export default {
  title: `${titles.icons}IconWrapper`,
  component: IconWrapper,
} as ComponentMeta<typeof IconWrapper>;

const Template: ComponentStory<typeof IconWrapper> = (args) => (
  <IconWrapper {...args} />
);

const ChevronUpIcon = Template.bind({});
ChevronUpIcon.args = {
  children: <ChevronUp />,
};
const EditIcon = Template.bind({});
EditIcon.args = {
  children: <Edit />,
};

export const Sizes = Template.bind({});
Sizes.decorators = [
  () => (
    <div className="grid grid-cols-10 gap-2 justify-items-centerr">
      <Paragraph>12px</Paragraph>
      <Paragraph>16px</Paragraph>
      <Paragraph>20px</Paragraph>
      <Paragraph>24px</Paragraph>
      <Paragraph>28px</Paragraph>
      <Paragraph>32px</Paragraph>
      <Paragraph>40px</Paragraph>
      <Paragraph>48px</Paragraph>
      <Paragraph>60px</Paragraph>
      <Paragraph>72px</Paragraph>
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={12} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={16} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={20} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={24} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={28} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={32} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={40} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={48} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={60} />
      <ChevronUpIcon {...(ChevronUpIcon.args as IIconWrapper)} size={72} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={12} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={16} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={20} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={24} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={28} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={32} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={40} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={48} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={60} />
      <EditIcon {...(EditIcon.args as IIconWrapper)} size={72} />
    </div>
  ),
];
