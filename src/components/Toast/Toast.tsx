import React from 'react';

import { Paragraph, ExternalLink, IconWrapper } from '@/index';
import { IToast, IToastIcon, IToastBody } from './ToastTypes';
import SvgClose from '@/icons/regular/Close';

const Toast = ({ children, color }: IToast) => {
  return (
    <div
      className={`absolute left-5 right-5 bottom-10 lg:right-6 lg:left-auto max-w-[405px] lg:bottom-auto lg:top-6 z-[100] flex items-start p-4 border border-${color}-300 bg-${color}-100 rounded gap-3 shadow-container`}
    >
      {children}
      <IconWrapper size={24}>
        <SvgClose className="text-dark-800" />
      </IconWrapper>
    </div>
  );
};

Toast.Icon = ({ children }: IToastIcon) => {
  return <IconWrapper size={24}>{children}</IconWrapper>;
};

Toast.Body = ({ title, children, href, textLink }: IToastBody) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <Paragraph size="medium" fontWeight="semibold">
        {title}
      </Paragraph>
      <Paragraph size="small">{children}</Paragraph>
      {href && textLink && (
        <ExternalLink href={href} className="underline underline-offset-4">
          {textLink}
        </ExternalLink>
      )}
    </div>
  );
};

export default Toast;
