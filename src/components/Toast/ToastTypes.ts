import React from 'react';

export interface IToast extends React.PropsWithChildren<{}> {
  children: React.ReactElement | React.ReactElement[];
  color: 'dark' | 'warning' | 'error' | 'green';
}

export interface IToastIcon {
  children: React.ReactElement;
}
export interface IToastBody {
  title: string;
  children: string;
  href?: string;
  textLink?: string;
}
