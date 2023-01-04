import React from 'react';
import { headingClasses, HeadingProps } from '../../types/typography';

const Heading = ({
  tag: Tag,
  children,
  className,
  textColor = 'text-dark-1000',
}: HeadingProps) => {
  const headingClass = headingClasses[Tag];

  return (
    <Tag className={`${headingClass} ${textColor} ${className} font-lato`}>
      {children}
    </Tag>
  );
};

export default Heading;
