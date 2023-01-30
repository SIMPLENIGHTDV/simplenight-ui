import React from 'react';
import IconWrapper from '../IconWrapper';

export interface IDisclaimer {
  message: string;
  icon: React.ReactNode;
}

const Disclaimer = ({ message, icon }: IDisclaimer) => (
  <section className="flex bg-white gap-2.5 p-1 border border-gray-300 rounded items-center">
    <IconWrapper size={16}>{icon}</IconWrapper>
    <p className="font-semibold text-xs leading-[20px] text-dark-1000">
      {message}
    </p>
  </section>
);

export default Disclaimer;
