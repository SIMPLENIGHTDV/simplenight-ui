import React from 'react';

export interface ITag extends React.PropsWithChildren<{}> {
  children: React.ReactElement | React.ReactElement[];
  color: 'dark' | 'warning' | 'error' | 'green' | 'white';
}

export interface ITagIcon {
  children: React.ReactElement;
}
export interface ITagBody {
  children: React.ReactElement | React.ReactElement[];
}
