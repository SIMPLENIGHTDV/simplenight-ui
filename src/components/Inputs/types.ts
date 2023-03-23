import { type ComponentPropsWithRef, type MouseEventHandler } from 'react';

export interface GeneralProps extends ComponentPropsWithRef<'input'> {
  inputSize?: 'large' | 'small';
  state?: 'idle' | 'disabled' | 'error' | 'success';
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

export type SelectProps = Omit<GeneralProps, 'value' | 'onChange'> &
  SelectSpecificProps;

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
