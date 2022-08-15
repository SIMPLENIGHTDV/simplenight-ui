import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Arrow from '../../icons/regular/Arrow';

import Button from './Button';

const title = 'SimplenightUI/';

export default {
  title: `${title}Button`,
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'outlined', 'danger'],
      control: { type: 'inline-radio' },
    },
    height: {
      description: 'Available options: `"large"`, `"small"`',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const JustText = Template.bind({});
JustText.args = {
  width: 'w-24',
  children: <p className="text-sm font-semibold leading-lg">Button</p>,
};

export const JustIcon = Template.bind({});
JustIcon.args = {
  width: 'w-11',
  children: <Arrow className="w-5 h-5" />,
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  width: 'w-24',
  children: (
    <>
      <Arrow className="w-5 h-5" />
      <p className="text-sm font-semibold leading-lg">Button</p>
    </>
  ),
};
