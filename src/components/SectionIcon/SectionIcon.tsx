/* eslint-disable react/require-default-props */
import React from 'react';
import { InfoCircle } from '../../icons/regular';

interface SectionIconProps {
  sizeRem?: number;
  colorClass?: string;
  icon?: React.ReactNode;
}

const SectionIcon = ({
  sizeRem = 2.5,
  colorClass = 'bg-primary-1000',
  icon = <InfoCircle />,
}: SectionIconProps) => {
  const sizeIcon = sizeRem / 2;
  return (
    <section
      className={`${colorClass} rounded-full grid place-content-center`}
      style={{ width: `${sizeRem}rem`, height: `${sizeRem}rem` }}
    >
      <section className="text-white" style={{ width: `${sizeIcon}rem`, height: `${sizeIcon}rem` }}>
        {icon}
      </section>
    </section>
  );
};

export default SectionIcon;
