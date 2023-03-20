import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Toast from './Toast';
import { CheckRound, Exclamation, InfoCircle, XCircle } from '@/icons';

export default {
  title: `${titles.components}Toast`,
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const Success = Template.bind({});

Default.decorators = [
  () => (
    <Toast color="dark">
      <Toast.Icon>
        <InfoCircle />
      </Toast.Icon>
      <Toast.Body title="Information" href="Text Link" textLink="Text Link">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Toast.Body>
    </Toast>
  ),
];
Warning.decorators = [
  () => (
    <Toast color="warning">
      <Toast.Icon>
        <Exclamation className="text-warning-600" />
      </Toast.Icon>
      <Toast.Body title="Warning">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Toast.Body>
    </Toast>
  ),
];
Error.decorators = [
  () => (
    <Toast color="error">
      <Toast.Icon>
        <XCircle className="text-error-1000" />
      </Toast.Icon>
      <Toast.Body title="Error">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Toast.Body>
    </Toast>
  ),
];
Success.decorators = [
  () => (
    <Toast color="green">
      <Toast.Icon>
        <CheckRound className="text-green-1000" />
      </Toast.Icon>
      <Toast.Body title="Success">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Toast.Body>
    </Toast>
  ),
];
