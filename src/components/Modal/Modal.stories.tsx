/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

const title = 'SimplenightUI/';

export default {
  title: `${title}Modal`,
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  open: false,
  closeModal: () => {},
  title: 'Modal Standard',
};
