import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';

import Counter from './Counter';

export default {
  title: `${titles.components}Counter`,
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => {
  const [value, setValue] = useState(0);
  return <Counter {...args} value={value} setValue={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
  maxValue: 10,
};
