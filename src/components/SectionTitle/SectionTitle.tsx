/* eslint-disable react/require-default-props */
import React from 'react';
import SectionIcon from '@/components/SectionIcon/SectionIcon';

export interface SectionTitleProps {
  icon?: React.ReactNode;
  title?: string;
  subTitle?: string;
  displayIcon?: boolean;
}

const SectionTitle = ({
  icon,
  title,
  subTitle,
  displayIcon = true,
}: SectionTitleProps) => (
  <section className="flex items-center gap-4">
    {displayIcon && <SectionIcon icon={icon} sizeRem={3.8} />}
    <section>
      <h2 className="text-[2rem] font-bold text-dark-800 leading-8">{title}</h2>
      {subTitle && (
        <p className="text-lg leading-6 text-dark-800">{subTitle}</p>
      )}
    </section>
  </section>
);

export default SectionTitle;
