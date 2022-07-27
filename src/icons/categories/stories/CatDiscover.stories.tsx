import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CatDiscover from '../CatDiscover';

export default {
  title: `${title}CatDiscover`,
  component: CatDiscover,
} as ComponentMeta<typeof CatDiscover>;

const Template: ComponentStory<typeof CatDiscover> = (args) => (
  <CatDiscover {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
