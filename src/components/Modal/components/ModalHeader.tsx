/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React, { MouseEvent, ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import SvgClose from '../../../icons/regular/Close';

interface ModalHeaderPops {
  onClose: (event?: MouseEvent<HTMLElement>) => void;
  title: string;
  headerAction?: ReactNode;
}

const ModalHeader = ({ onClose, title, headerAction }: ModalHeaderPops) => (
  <header className="w-full flex justify-between items-center bg-dark-100 shadow-container border-b border-dark-300 p-5 lg:px-6 lg:rounded-t-4">
    <Dialog.Title>
      <p className="font-semibold text-base leading-6">{title}</p>
    </Dialog.Title>
    <section className="flex justify-end gap-6 items-center">
      {headerAction}
      <button onClick={onClose} className="text-dark-1000">
        <SvgClose className="w-8" />
      </button>
    </section>
  </header>
);

export default ModalHeader;
