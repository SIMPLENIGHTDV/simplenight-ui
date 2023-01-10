/* eslint-disable react/button-has-type */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './Tooltip';

const title = 'SimplenightUI/';

export default {
  title: `${title}Tooltip`,
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <section className="p-8"><Tooltip {...args} /></section>;

export const DefaultTooltip = Template.bind({});

DefaultTooltip.args = {
  text: 'Hello World',
  children: <button className="bg-dark-200 p-1 rounded text-dark-700">Hover me</button>,
};
