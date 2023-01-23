import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import Error500 from './500';

export default {
  title: `${titles.images}Error500`,
  component: Error500,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'error', 'warning'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Error500>;

const Template: ComponentStory<typeof Error500> = (args) => (
  <DocsWrapper width={500}>
    <Error500 {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
