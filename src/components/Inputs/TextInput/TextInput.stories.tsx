import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Text Input`,
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
