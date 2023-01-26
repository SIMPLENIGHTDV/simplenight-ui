import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';

import Button, { IButton } from './Button';
import { ChevronUp } from '@/icons';

export default {
  title: `${titles.components}Button`,
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
  children: 'Button',
};

export const JustIcon = Template.bind({});
JustIcon.args = {
  /* width: 'w-11', */
  icon: <ChevronUp className="w-5 h-5 flex-none" />,
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  /* width: 'w-24', */
  children: 'Button',
  icon: <ChevronUp className="w-5 h-5 flex-none" />,

};
export const Test = Template.bind({});
Test.decorators = [
  () => (
    <div className="grid grid-cols-9 justify-items-center gap-2">
      <JustText {...JustText.args as IButton} />
      <TextAndIcon {...TextAndIcon.args as IButton} />
      <JustText {...JustText.args as IButton} type="outlined" />
      <TextAndIcon {...TextAndIcon.args as IButton} type="outlined" />
      <JustText {...JustText.args as IButton} type="danger" />
      <TextAndIcon {...TextAndIcon.args as IButton} type="danger" />
      <JustIcon {...JustIcon.args as IButton} />
      <JustIcon {...JustIcon.args as IButton} type="outlined" />
      <JustIcon {...JustIcon.args as IButton} type="no-background" />

      <JustText {...JustText.args as IButton} disabled />
      <TextAndIcon {...TextAndIcon.args as IButton} disabled />
      <JustText {...JustText.args as IButton} type="outlined" disabled />
      <TextAndIcon {...TextAndIcon.args as IButton} type="outlined" disabled />
      <JustText {...JustText.args as IButton} type="danger" disabled />
      <TextAndIcon {...TextAndIcon.args as IButton} type="danger" disabled />
      <JustIcon {...JustIcon.args as IButton} disabled />
      <JustIcon {...JustIcon.args as IButton} type="outlined" disabled />
      <JustIcon {...JustIcon.args as IButton} type="no-background" disabled />

      <JustText {...JustText.args as IButton} loading />
      <TextAndIcon {...TextAndIcon.args as IButton} loading />
      <JustText {...JustText.args as IButton} type="outlined" loading />
      <TextAndIcon {...TextAndIcon.args as IButton} type="outlined" loading />
      <JustText {...JustText.args as IButton} type="danger" loading />
      <TextAndIcon {...TextAndIcon.args as IButton} type="danger" loading />
      <JustIcon {...JustIcon.args as IButton} loading />
      <JustIcon {...JustIcon.args as IButton} type="outlined" loading />
      <JustIcon {...JustIcon.args as IButton} type="no-background" loading />
    </div>
  ),
];
