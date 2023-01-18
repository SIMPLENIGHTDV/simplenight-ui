import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import ExternalLink from './ExternalLink';

export default {
  title: `${titles.text}ExternalLink`,
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Google = Template.bind({});
Google.args = {
  href: 'https://google.com',
  children: <>Google</>,
};
