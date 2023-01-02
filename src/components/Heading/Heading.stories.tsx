import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './Heading';

const title = 'SimplenightUI/';

export default {
  title: `${title}Heading`,
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingDark = Template.bind({});
HeadingDark.args = {
  tag: 'h1',
  children: 'Heading Test',
};

export const HeadingPrimary = Template.bind({});
HeadingPrimary.args = {
  tag: 'h1',
  children: 'Heading Test',
  textColor: 'text-primary-1000',
};
