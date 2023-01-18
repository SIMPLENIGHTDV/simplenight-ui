import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import TextInput from '@/components/Inputs/TextInput/TextInput';
import FormField from './FormField';

export default {
  title: `${titles.inputs}FormField`,
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => (
  <FormField {...args} />
);

export const Basic = Template.bind({});
export const Label = Template.bind({});
export const LabelAndRequired = Template.bind({});
export const LabelRequiredAndSecInfo = Template.bind({});
export const LabelRequiredInfoAndError = Template.bind({});
export const LabelRequiredInfoErrorAndCounter = Template.bind({});

Basic.args = {
  children: <TextInput value="Hi, I'm a text input" onChange={() => {}} />,
};

Label.args = {
  children: <TextInput value="Hi, I'm a text input" onChange={() => {}} />,
  label: 'Form Group',
};

LabelAndRequired.args = {
  children: <TextInput value="Hi, I'm a text input" onChange={() => {}} />,
  label: 'Form Group',
  required: { required: true, label: 'Required' },
};

LabelRequiredAndSecInfo.args = {
  children: <TextInput value="Hi, I'm a text input" onChange={() => {}} />,
  label: 'Form Group',
  required: { required: true, label: 'Required' },
  info: 'Secondary Info',
};

LabelRequiredInfoAndError.args = {
  children: <TextInput value="Hi, I'm a text input" onChange={() => {}} />,
  label: 'Form Group',
  required: { required: true, label: 'Required' },
  info: 'Secondary Info',
  error: 'Error Message',
};

LabelRequiredInfoErrorAndCounter.args = {
  children: <TextInput value="Hi, I'm a text input" onChange={() => {}} />,
  label: 'Input Label',
  required: { required: true, label: 'Required' },
  info: 'Secondary Info',
  error: 'Error Message',
  counterValue: 10,
  counterMax: 50,
};
