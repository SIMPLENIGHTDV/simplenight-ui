import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import Itinerary from './Itinerary';

export default {
  title: `${titles.images}Itinerary`,
  component: Itinerary,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'error', 'warning'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Itinerary>;

const Template: ComponentStory<typeof Itinerary> = (args) => (
  <DocsWrapper width={500}>
    <Itinerary {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
