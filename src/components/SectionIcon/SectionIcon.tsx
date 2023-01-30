/* eslint-disable react/require-default-props */
import React from 'react';
import { InfoCircle } from '@/icons/regular';
import IconWrapper from '../IconWrapper';

export interface SectionIconProps {
  colorClass?: string;
  icon?: React.ReactNode;
}

const SectionIcon = ({
  colorClass = 'bg-primary-1000',
  icon = <InfoCircle className="text-white" />,
}: SectionIconProps) => {
  return (
    <section
      className={`${colorClass} rounded-full  w-[40px] h-[40px] md:w-[60px] md:h-[60px] 
      flex justify-center items-center
    `}
    >
      <IconWrapper size={24} desktop={32}>
        {icon}
      </IconWrapper>
    </section>
  );
};

export default SectionIcon;
