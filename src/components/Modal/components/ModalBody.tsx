import React, { ReactNode } from 'react';

interface ModalBodyPops {
  children: ReactNode | ReactNode[];
}

const ModalBody = ({ children }: ModalBodyPops) => (
  <section className="h-screen overflow-y-scroll bg-white">{children}</section>
);

export default ModalBody;
