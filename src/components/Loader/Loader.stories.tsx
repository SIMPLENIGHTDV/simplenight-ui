import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

const title = 'SimplenightUI/';

export default {
  title: `${title}Loader`,
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Standard = Template.bind({});
export const Blue = Template.bind({});
Standard.args = {};
Blue.args = {
  circleColor: 'text-blue-200',
  spinnerColor: 'text-blue-900',
};
