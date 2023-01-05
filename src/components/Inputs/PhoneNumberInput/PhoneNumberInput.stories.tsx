import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PhoneNumberInput from './PhoneNumberInput';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Phone Number Input`,
  component: PhoneNumberInput,
} as ComponentMeta<typeof PhoneNumberInput>;

const Template: ComponentStory<typeof PhoneNumberInput> = (args) => (
  <PhoneNumberInput {...args} />
);

const handleChange = (e:string) => {
  console.log(e);
};
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  onChange: handleChange,
};
