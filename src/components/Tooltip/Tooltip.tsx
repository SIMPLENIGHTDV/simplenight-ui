import React from 'react';
import { Paragraph } from '..';
import IconWrapper from '../IconWrapper';
import { ITooltip } from './TooltipTypes';

const Tooltip = ({ text, children, position = 'top-left' }: ITooltip) => {
  const mobilePositionClasses = 'fixed left-[20px] mt-6 md:left-auto md:mt-0 ';
  const desktopPositionClasses = {
    'top-left': 'md:absolute md:bottom-6  md:left-0 ',
    'top-right': 'md:absolute  md:bottom-6  md:right-0',
    'top-center': 'md:absolute  md:bottom-6  md:left-1/2 md:-translate-x-1/2',
    'bottom-left': 'md:absolute   md:top-6  md:left-0',
    'bottom-right': 'md:absolute   md:top-6  md:right-0 ',
    'bottom-center': ' md:absolute  md:top-6  md:left-1/2 md:-translate-x-1/2',
  };
  return (
    <span className="relative inline-block group">
      <span
        className={`border  text-left opacity-0 group-hover:opacity-100 transition-opacity py-2 px-3 rounded shadow-container
        w-[calc(100vw-40px)] md:w-max   md:max-w-[335px] capitalize bg-white z-10
         ${mobilePositionClasses} ${desktopPositionClasses[position]}`}
      >
        <Paragraph size="xxsmall">{text}</Paragraph>
      </span>
      <IconWrapper size={16}>{children}</IconWrapper>
    </span>
  );
};

export default Tooltip;
