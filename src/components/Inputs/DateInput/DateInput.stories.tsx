import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DateInput from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Date Input`,
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
