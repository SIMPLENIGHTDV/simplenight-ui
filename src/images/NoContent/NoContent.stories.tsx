import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import NoContent from './NoContent';

export default {
  title: `${titles.images}NoContent`,
  component: NoContent,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'error', 'warning'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof NoContent>;

const Template: ComponentStory<typeof NoContent> = (args) => (
  <DocsWrapper width={500}>
    <NoContent {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
