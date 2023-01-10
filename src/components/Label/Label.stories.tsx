/* eslint-disable react/button-has-type */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from './Label';

const title = 'SimplenightUI/';

export default {
  title: `${title}Label`,
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});

DefaultLabel.args = {
  children: 'Hello World',
};
