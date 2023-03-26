import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import RecomendationCard from './RecomendationCard';

export default {
  title: `${titles.components}RecomendationCard`,
  component: RecomendationCard,
} as ComponentMeta<typeof RecomendationCard>;

const Template: ComponentStory<typeof RecomendationCard> = (args) => <RecomendationCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Lady Gaga',
  price: 'US$270.00'
}
