import { type ComponentPropsWithRef, type MouseEventHandler } from 'react';

export interface GeneralProps extends ComponentPropsWithRef<'input'> {
  inputSize?: 'large' | 'small';
  state?: 'idle' | 'disabled' | 'error' | 'success';
}

export interface SelectOption {
  value: string;
  label: string;
}

export type SelectProps = Omit<
  GeneralProps,
  'value' | 'onChange' | 'defaultValue'
>;

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
