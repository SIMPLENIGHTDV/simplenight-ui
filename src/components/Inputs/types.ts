import React, { MouseEventHandler } from 'react';

export interface GeneralProps {
  name?: string;
  size?: 'large' | 'small';
  placeholder?: string;
  state?: 'idle' | 'disabled' | 'error' | 'success';
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectSpecificProps {
  options: SelectOption[];
  defaultValue?: SelectOption;
  searchable?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (option: SelectOption) => void;
}
export interface ColorsMap {
  [key: string]: string;
}

export interface ButtonInputProps {
  name?: string;
  size?: 'large' | 'small';
  state?: 'idle' | 'disabled' | 'error' | 'success';
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
