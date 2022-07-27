import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import TransportationOutline from '../TransportationOutline';

export default {
  title: `${title}TransportationOutline`,
  component: TransportationOutline,
} as ComponentMeta<typeof TransportationOutline>;

const Template: ComponentStory<typeof TransportationOutline> = (args) => (
  <TransportationOutline {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
