import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import LoaderBar from './LoaderBar';

export default {
  title: `${titles.components}LoaderBar`,
  component: LoaderBar,
} as ComponentMeta<typeof LoaderBar>;

const Template: ComponentStory<typeof LoaderBar> = (args) => (
  <LoaderBar {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  loaded: false,
};
