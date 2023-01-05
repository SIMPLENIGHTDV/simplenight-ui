/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';
import Button from '../Button/Button';

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
  children: (
    <>
      <ModalHeader onClose={() => {}} title="Header" />
      <ModalBody>
        <section className="flex items-center justify-center h-full">
          <p>Modal body example</p>
        </section>
      </ModalBody>
      <ModalFooter>
        <section className="grid gap-4">
          <section className="grid gap-3 lg:flex lg:w-[337px] lg:justify-self-end">
            <Button
              type="outlined"
              width="w-full lg:w-[30%]"
              onClick={() => {}}
            >
              <p className="text-base font-semibold leading-base">Cancel</p>
            </Button>
            <Button width="w-full lg:w-[70%]" onClick={() => {}}>
              <p className="text-base font-semibold leading-base">Apply</p>
            </Button>
          </section>
        </section>
      </ModalFooter>
    </>
  ),
};

export const Empty = Template.bind({});
Empty.args = {
  open: true,
  closeModal: () => {},
  children: (
    <section className="flex items-center justify-center h-full">
      <p>Empty modal without header and footer</p>
    </section>
  ),
};
