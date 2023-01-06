import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MinusIcon from '../../icons/regular/MinusIcon';
import PlusIcon from '../../icons/regular/PlusIcon';
import title from '../../constants/constants';

import DualButton from './DualButton';

export default {
  title: `${title}DualButton`,
  component: DualButton,
} as ComponentMeta<typeof DualButton>;

const Template: ComponentStory<typeof DualButton> = (args) => (
  <DualButton {...args} />
);

export const Active = Template.bind({});
Active.args = {
  leftValue: <MinusIcon />,
  rightValue: <PlusIcon />,
};

export const RightDisabled = Template.bind({});
RightDisabled.args = {
  disabledRight: true,
  leftValue: <MinusIcon />,
  rightValue: <PlusIcon />,
};

export const LeftDisabled = Template.bind({});
LeftDisabled.args = {
  disabledLeft: true,
  leftValue: <MinusIcon />,
  rightValue: <PlusIcon />,
};
