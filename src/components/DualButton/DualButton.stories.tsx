import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MinusIcon from '@/icons/regular/MinusIcon';
import PlusIcon from '@/icons/regular/PlusIcon';
import { titles } from '@/constants';

import DualButton from './DualButton';
import IconWrapper from '../IconWrapper';

export default {
  title: `${titles.components}DualButton`,
  component: DualButton,
} as ComponentMeta<typeof DualButton>;

const Template: ComponentStory<typeof DualButton> = (args) => (
  <DualButton {...args} />
);

export const Active = Template.bind({});
Active.args = {
  leftValue: (
    <IconWrapper size={24}>
      <MinusIcon />
    </IconWrapper>
  ),
  rightValue: (
    <IconWrapper size={24}>
      <PlusIcon />
    </IconWrapper>
  ),
};

export const RightDisabled = Template.bind({});
RightDisabled.args = {
  disabledRight: true,
  leftValue: (
    <IconWrapper size={24}>
      <MinusIcon />
    </IconWrapper>
  ),
  rightValue: (
    <IconWrapper size={24}>
      <PlusIcon />
    </IconWrapper>
  ),
};

export const LeftDisabled = Template.bind({});
LeftDisabled.args = {
  disabledLeft: true,
  leftValue: (
    <IconWrapper size={24}>
      <MinusIcon />
    </IconWrapper>
  ),
  rightValue: (
    <IconWrapper size={24}>
      <PlusIcon />
    </IconWrapper>
  ),
};
