/* eslint-disable react/button-has-type */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Tooltip from './Tooltip';
import QuestionCircle from '@/icons/regular/QuestionCircle';
import { ITooltip } from './TooltipTypes';

export default {
  title: `${titles.components}Tooltip`,
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const TopLeft = Template.bind({});
export const TopRight = Template.bind({});
export const TopCenter = Template.bind({});
export const BottomLeft = Template.bind({});
export const BottomRight = Template.bind({});
export const BottomCenter = Template.bind({});

const defaultArgs = {
  text: 'The taxes are tax recovery charges Simplenight pays to its vendors (e.g. hotels); for details, please see our Terms of Use. We retain our service fees as compensation in servicing your travel reservation.',
  children: <QuestionCircle className="text-dark-700" />,
};

TopLeft.decorators = [
  () => (
    <div className="w-full pt-24 flex justify-center">
      <TopLeft {...(defaultArgs as ITooltip)} position="top-left" />
    </div>
  ),
];
TopRight.decorators = [
  () => (
    <div className="w-full pt-24 flex justify-center">
      <TopRight {...(defaultArgs as ITooltip)} position="top-right" />
    </div>
  ),
];
TopCenter.decorators = [
  () => (
    <div className="w-full pt-24 flex justify-center">
      <TopCenter {...(defaultArgs as ITooltip)} position="top-center" />
    </div>
  ),
];
BottomLeft.decorators = [
  () => (
    <div className="w-full flex justify-center">
      <BottomLeft {...(defaultArgs as ITooltip)} position="bottom-left" />
    </div>
  ),
];
BottomRight.decorators = [
  () => (
    <div className="w-full flex justify-center">
      <BottomRight {...(defaultArgs as ITooltip)} position="bottom-right" />
    </div>
  ),
];
BottomCenter.decorators = [
  () => (
    <div className="w-full flex justify-center">
      <BottomCenter {...(defaultArgs as ITooltip)} position="bottom-center" />
    </div>
  ),
];
