import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TravelersRoomsInput from '.';

const title = 'SimplenightUI/Inputs/';

export default {
  title: `${title}Travelers + Rooms Input`,
  component: TravelersRoomsInput,
} as ComponentMeta<typeof TravelersRoomsInput>;

const Template: ComponentStory<typeof TravelersRoomsInput> = (args) => (
  <TravelersRoomsInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
export const Filled = Template.bind({});
Filled.args = {
  isOpen: false,
  value: { travelers: '2 Adult, 2 Children', rooms: '2 Rooms' },
};
export const Error = Template.bind({});
Error.args = {
  isOpen: false,
  state: 'error',
  value: { travelers: '2 Adult, 2 Children', rooms: '2 Rooms' },
};
export const Success = Template.bind({});
Success.args = {
  isOpen: false,
  state: 'success',
  value: { travelers: '2 Adult, 2 Children', rooms: '2 Rooms' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  value: { travelers: '2 Adult, 2 Children', rooms: '2 Rooms' },
};
