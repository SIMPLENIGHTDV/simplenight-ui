import React from 'react';

import { IconWrapper } from '@/index';
import { ITag, ITagIcon, ITagBody } from './TagTypes';

const Tag = ({ children, color }: ITag) => {
  return (
    <div
      className={`inline-flex items-center p-2 ${
        color === 'white'
          ? 'bg-white border border-dark-300'
          : `bg-${color}-100`
      } rounded gap-2`}
    >
      {children}
    </div>
  );
};

Tag.Icon = ({ children }: ITagIcon) => {
  return <IconWrapper size={16}>{children}</IconWrapper>;
};

Tag.Body = ({ children }: ITagBody) => {
  return <div className="flex-1">{children}</div>;
};

export default Tag;
