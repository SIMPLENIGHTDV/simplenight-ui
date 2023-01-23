import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import Error404 from './404';

export default {
  title: `${titles.images}Error404`,
  component: Error404,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'error', 'warning'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Error404>;

const Template: ComponentStory<typeof Error404> = (args) => (
  <DocsWrapper width={500}>
    <Error404 {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
