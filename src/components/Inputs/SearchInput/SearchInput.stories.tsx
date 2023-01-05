import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchInput from './SearchInput';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Search Input`,
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
