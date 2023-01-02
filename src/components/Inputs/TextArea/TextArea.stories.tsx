import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Text Area`,
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
