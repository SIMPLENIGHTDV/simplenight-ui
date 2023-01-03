import React from 'react';
import { paragraphClasses, ParagraphProps } from './TypographyTypes';

const Paragraph = ({
  fontWeight,
  className,
  children,
  size,
  textColor = 'text-dark-1000',
}: ParagraphProps) => {
  const paragraphClass = paragraphClasses[size];

  return (
    <p
      className={`${paragraphClass} ${textColor} ${className} ${
        fontWeight === 'semibold' && 'font-semibold'
      } ${fontWeight === 'normal' && 'font-normal'} ${
        fontWeight === 'medium' && 'font-medium'
      } font-lato m-0`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
