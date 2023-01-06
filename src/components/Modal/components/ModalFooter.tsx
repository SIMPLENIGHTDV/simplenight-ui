import React, { ReactNode } from 'react';

interface ModalFooterProps {
  children: ReactNode | ReactNode[];
}

const ModalFooter = ({ children }: ModalFooterProps) => (
  <footer className="w-full px-5 py-6 bg-white shadow-container lg:px-6 lg:rounded-b-4">
    {children}
  </footer>
);

export default ModalFooter;
