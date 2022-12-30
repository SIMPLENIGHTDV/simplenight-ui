import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PasswordInput from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Password Input`,
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
