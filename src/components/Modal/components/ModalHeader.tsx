/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React, { MouseEvent, ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import SvgCross from '@/icons/regular/Cross';

export interface ModalHeaderPops {
  onClose: (event?: MouseEvent<HTMLElement>) => void;
  title: string;
  headerAction?: ReactNode;
}

const ModalHeader = ({ onClose, title, headerAction }: ModalHeaderPops) => (
  <header className="flex items-center justify-between w-full p-5 border-b bg-dark-100 shadow-container border-dark-300 lg:px-6 lg:rounded-t-4">
    <Dialog.Title>
      <p className="text-base font-semibold leading-6">{title}</p>
    </Dialog.Title>
    <section className="flex items-center justify-end gap-6">
      {headerAction}
      <button onClick={onClose} className="text-dark-1000">
        <SvgCross className="w-8" />
      </button>
    </section>
  </header>
);

export default ModalHeader;
